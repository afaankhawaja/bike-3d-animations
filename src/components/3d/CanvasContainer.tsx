import { Canvas } from "@react-three/fiber";
const CanvasContainer = () => {
  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight color={"green"} position={[6, 6, 10]} />
        <mesh>
          <boxGeometry args={[3, 5, 2]} />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  );
};

export default CanvasContainer;
