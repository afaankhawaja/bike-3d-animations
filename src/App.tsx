import { useEffect, useRef } from "react";
import Model from "./components/3d/Model";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import HomeLayout from "./components/HomeLayout";
import useWindowSize from "./hooks/useWindowSize";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const modelRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);
  const cameraRef = useRef<{ position: { x: number; y: number; z: number } }>({
    position: { x: -3.448, y: 1.24, z: -0.378 },
  });
  const [width] = useWindowSize();
  const isMobile = width < 768;
  useEffect(() => {
    if (!modelRef.current || !parentRef.current) return;
    const cameraPositions = isMobile
      ? {
          // Mobile positions
          p1: { x: -5.5, y: 3.0, z: -2.5 },
          p2: { x: 0, y: 0, z: 0 },
          p3: { x: -1.5, y: 2.0, z: 2.0 },
        }
      : {
          // Desktop positions
          p1: { x: -2.0, y: 2.5, z: 1.5 },
          p2: { x: 2.5, y: 1.8, z: -2.0 },
          p3: { x: 0.9, y: 5.0, z: 2.5 },
        };

    const modelTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: parentRef.current,
        start: "top top",
        end: "100%+=50px bottom",
        scrub: 1,
      },
    });

    modelTimeline.to(modelRef.current, {
      x: "5vw",
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
        ...cameraPositions.p1,
        ease: "none",
        duration: 1,
      },
      0
    );

    modelTimeline.to(
      cameraRef.current.position,
      {
        ...cameraPositions.p2,
        ease: "none",
        duration: 1,
      },
      1
    );

    modelTimeline.to(
      cameraRef.current.position,
      {
        ...cameraPositions.p3,
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
