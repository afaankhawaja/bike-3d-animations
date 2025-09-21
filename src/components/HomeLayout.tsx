const HomeLayout = () => {
  return (
    <div className="absolute inset-0 flex flex-col justify-center space-y-32 px-6 md:px-16 text-[#1995AD]">
      <div className="max-w-lg">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Ride with Power
        </h2>
        <p className="text-lg leading-relaxed opacity-90">
          Experience the thrill of the open road with our meticulously crafted
          bicycles. Designed for performance and built for adventure, every ride
          is a journey of discovery.
        </p>
      </div>

      <div className="self-end max-w-lg text-right">
        <p className="text-lg leading-relaxed opacity-90">
          From the urban jungle to scenic trails, our bikes are your perfect
          companion. Lightweight frames, responsive handling, and timeless
          design come together for an unparalleled riding experience.
        </p>
      </div>

      <div className="max-w-lg">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Engineered for Excellence
        </h2>
        <p className="text-lg leading-relaxed opacity-90">
          At the heart of our design is a commitment to quality. We use the
          finest materials and cutting-edge engineering to create bikes that are
          as durable as they are beautiful.
        </p>
      </div>
    </div>
  );
};

export default HomeLayout;
