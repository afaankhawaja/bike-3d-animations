import { Canvas, useLoader, useFrame, useThree } from "@react-three/fiber";
import { Suspense, type RefObject } from "react";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

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

function Scene() {
  const gltf = useLoader(GLTFLoader, "/models/bicycle/scene.gltf");
  return <primitive position={[0, 0.76, 0]} object={gltf.scene} />;
}

interface ModelProps {
  cameraRef: RefObject<{ position: { x: number; y: number; z: number } }>;
}

const Model = ({ cameraRef }: ModelProps) => {
  return (
    <Canvas
      className="w-100vw h-100vh"
      camera={{ position: [-3.448, 1.24, -0.378], fov: 60 }}
    >
      <ambientLight intensity={1.8} />
      <directionalLight position={[0, 0, 5]} />
      <CameraController cameraRef={cameraRef} />
      <Suspense fallback={<>loading...</>}>
        <Scene />
      </Suspense>
    </Canvas>
  );
};

export default Model;
