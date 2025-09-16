import { useEffect, useRef } from "react";
import Model from "./components/3d/Model";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

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
        x: 0.5,
        y: 3.0,
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
    <div ref={parentRef} className="w-screen h-[1024px] relative">
      <div ref={modelRef} id="canvas-container" className="w-full h-full">
        <Model cameraRef={cameraRef} />
      </div>
      <div className="flex-col justify-between absolute inset-0 min-w-screen">
        <div className="max-w-[25%] relative top-10 left-5">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ride with Power
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            Experience the thrill of the open road with our meticulously crafted
            bicycles. Designed for performance and built for adventure, every
            ride is a journey of discovery.
          </p>
        </div>
        <div className="flex justify-end relative top-32 right-5">
          <p className="text-lg leading-relaxed max-w-[25%]">
            From the urban jungle to scenic trails, our bikes are your perfect
            companion. Lightweight frames, responsive handling, and timeless
            design come together for an unparalleled riding experience.
          </p>
        </div>
        <div className="max-w-[25%] relative top-60 left-5">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Engineered for Excellence
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            At the heart of our design is a commitment to quality. We use the
            finest materials and cutting-edge engineering to create bikes that
            are as durable as they are beautiful.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
