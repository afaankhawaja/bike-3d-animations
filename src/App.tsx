import { useEffect, useRef } from "react";
import Model from "./components/3d/Model";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import HomeLayout from "./components/HomeLayout";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const modelRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);
  const cameraRef = useRef<{ position: { x: number; y: number; z: number } }>({
    position: { x: -3.448, y: 1.24, z: -0.378 },
  });

  useEffect(() => {
    if (!modelRef.current || !parentRef.current) return;

    const modelTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: parentRef.current,
        start: "top top",
        end: "100%+=50px bottom",
        scrub: 1,
      },
    });

    modelTimeline.to(modelRef.current, {
      x: "-25vw",
      y: "35vh",
      ease: "none",
      duration: 1,
    });
    modelTimeline.to(modelRef.current, {
      x: "25vw",
      y: "70vh",
      ease: "none",
      duration: 1,
    });
    modelTimeline.to(modelRef.current, {
      x: "-5vw",
      y: "70vh",
      ease: "none",
      duration: 1,
    });

    // Camera animations

    modelTimeline.to(
      cameraRef.current.position,
      {
        x: -2.0,
        y: 2.5,
        z: 1.5,
        ease: "none",
        duration: 1,
      },
      0
    );

    modelTimeline.to(
      cameraRef.current.position,
      {
        x: 2.5,
        y: 1.8,
        z: -2.0,
        ease: "none",
        duration: 1,
      },
      1
    );

    modelTimeline.to(
      cameraRef.current.position,
      {
        x: 0.9,
        y: 5.0,
        z: 2.5,
        ease: "none",
        duration: 1,
      },
      2
    );

    return () => {
      modelTimeline.revert();
    };
  }, []);
  return (
    <div
      ref={parentRef}
      className="max-w-screen overflow-hidden h-[1224px] relative bg-gradient-to-b from-[#A1D6E2] via-[#F1F1F2] to-[#A1D6E2]"
    >
      <div ref={modelRef} id="canvas-container" className="w-full h-full">
        <Model cameraRef={cameraRef} />
      </div>
      <HomeLayout />
    </div>
  );
};

export default App;
