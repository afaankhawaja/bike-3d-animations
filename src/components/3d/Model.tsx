import { OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

function Scene() {
  const gltf = useLoader(GLTFLoader, "/models/bicycle/scene.gltf");
  return <primitive position={[0, 0.76, 0]} object={gltf.scene} />;
}

const Model = () => {
  return (
    <div className="w-full h-full bg-amber-600">
      <Canvas
        className="w-100vw h-100vh"
        camera={{ position: [-3.448, 1.24, -0.378], fov: 60 }}
      >
        <ambientLight intensity={1.8} />
        <directionalLight position={[0, 0, 5]} />
        <Suspense fallback={<>loading...</>}>
          <Scene />
        </Suspense>
        <OrbitControls target={[0, 1, 0]} />
      </Canvas>
    </div>
  );
};

export default Model;
