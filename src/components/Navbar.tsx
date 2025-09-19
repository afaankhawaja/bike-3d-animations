const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#1995AD]/90 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-[#F1F1F2] tracking-wide">
          CycleX
        </h1>

        <ul className="hidden md:flex space-x-8 text-[#F1F1F2] font-medium">
          <li className="hover:text-[#A1D6E2] transition">Home</li>
          <li className="hover:text-[#A1D6E2] transition">About</li>
          <li className="hover:text-[#A1D6E2] transition">Models</li>
          <li className="hover:text-[#A1D6E2] transition">Contact</li>
        </ul>

        <button className="px-5 py-2 rounded-xl bg-[#A1D6E2] text-[#1995AD] font-semibold hover:bg-[#F1F1F2] hover:text-[#1995AD] transition">
          Shop Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
