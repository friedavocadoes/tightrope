import { useState, useEffect } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-10 transition-shadow duration-300 ${
        isScrolled ? "shadow-lg" : ""
      } bg-white`}
    >
        <div className="max-w-3xl lg:max-w-7xl mx-auto flex items-center justify-between h-20">
            <div className="flex items-center">  
              <span className="text-xl mx-2 mb-1 font-semibold text-amber-600 hover:text-amber-700 cursor-pointer">TightRope</span>
            </div>

            <div className="flex space-x-8">
                <a href="#" className="text-gray-900 hover:text-pink-600 hover:font-bold transition-all duration-200 ease-in-out">
                    Today
                </a>
                <a href="#" className="text-gray-900 hover:text-pink-600 hover:font-bold transition-all duration-200 ease-in-out">
                    Explore
                </a>
                <a href="#" className="text-gray-900 hover:text-pink-600 hover:font-bold transition-all duration-200 ease-in-out">
                    About
                </a>
            </div>

            <div className="flex space-x-4">
                <button className="px-4 py-2 items-center bg-amber-600 text-white rounded-sm hover:bg-amber-400 hover:scale-105 hover:shadow-xl transition-all duration-200 ease-in-out">
                    Log in
                </button>
                <button className="px-4 py-2 bg-gray-200 text-gray-900 rounded-sm hover:bg-gray-300 hover:scale-105 hover:shadow-xl transition-all duration-200 ease-in-out">
                    Sign up
                </button>
            </div>

        </div>
    </nav>
  );
}

export default Navbar;
