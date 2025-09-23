import { Canvas, useLoader, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useRef, type RefObject } from "react";
import { Object3D } from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useWindowSize from "../../hooks/useWindowSize";

gsap.registerPlugin(ScrollTrigger);
interface CameraControllerProps {
  cameraRef: RefObject<{ position: { x: number; y: number; z: number } }>;
}

function CameraController({ cameraRef }: CameraControllerProps) {
  const { camera } = useThree();

  useFrame(() => {
    if (cameraRef.current) {
      camera.position.x = cameraRef.current.position.x;
      camera.position.y = cameraRef.current.position.y;
      camera.position.z = cameraRef.current.position.z;

      camera.lookAt(0, 0, 0);
    }
  });

  return null;
}

function Scene({ isMobile }: any) {
  const gltf = useLoader(GLTFLoader, "/models/bicycle/scene.gltf");
  const wheelRef = useRef<Object3D>(null);
  const innerWheel1Ref = useRef<Object3D>(null);
  const innerWheel2Ref = useRef<Object3D>(null);

  useEffect(() => {
    if (gltf && gltf.scene) {
      const wheel = gltf.scene.getObjectByName("1Circle140_M_Wheel_2_0");
      const innerWheel1 = gltf.scene.getObjectByName("Cylinder046");
      const innerWheel2 = gltf.scene.getObjectByName("Cylinder047");

      if (wheel) wheelRef.current = wheel;
      if (innerWheel1) innerWheel1Ref.current = innerWheel1;
      if (innerWheel2) innerWheel2Ref.current = innerWheel2;
    }

    if (wheelRef.current) {
      gsap.to(wheelRef.current.rotation, {
        z: "+=" + Math.PI * 10,
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
    }

    if (innerWheel1Ref.current) {
      gsap.to(innerWheel1Ref.current.rotation, {
        x: "+=" + Math.PI * 10,
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
    }

    if (innerWheel2Ref.current) {
      gsap.to(innerWheel2Ref.current.rotation, {
        x: "+=" + Math.PI * 10,
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
    }
  }, [gltf]);

  return (
    <primitive
      position={isMobile ? [1, 1.1, 0.5] : [0, 0.8, 0.5]}
      object={gltf.scene}
    />
  );
}

interface ModelProps {
  cameraRef: RefObject<{ position: { x: number; y: number; z: number } }>;
}

const Model = ({ cameraRef }: ModelProps) => {
  const [width] = useWindowSize();
  const isMobile = width < 768;
  return (
    <Canvas
      className="w-100vw h-100vh pb-16"
      camera={{
        position: isMobile ? [-3.448, 3.74, -0.378] : [-3.448, 1.24, -0.378],
        fov: isMobile ? 90 : 60,
      }}
    >
      <ambientLight intensity={1.8} />
      <directionalLight position={[0, 0, 5]} />
      <CameraController cameraRef={cameraRef} />
      <Suspense fallback={<>loading...</>}>
        <Scene isMobile={isMobile} />
      </Suspense>
    </Canvas>
  );
};

export default Model;
