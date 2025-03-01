import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import imgg from "../assets/ideate.png";
import { Link } from "react-router-dom";
// import img2 from "../assets/Image.jpg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-16 md:h-24 flex justify-center font-[Poppins] transition-all duration-300 ease-in-out z-50 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="w-[80%] md:w-[85%] h-full flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src={imgg} alt="Logo" className="h-12 md:h-16" />
            {/* <img src={img2} alt="Global Icon" className="h-8 md:h-12 ml-2" /> */}
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center">
            <ul
              className={`flex space-x-6 xl:space-x-12 px-4 ${
                isScrolled ? "text-gray-700" : "text-white"
              } xl:px-10 font-medium text-[17px] py-3 rounded-full transition-all duration-300`}
            >
              <li className="cursor-pointer relative group">
                <a href="#home">Global Future Summit 2.0</a>
                <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#4285f4] transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="cursor-pointer relative group">
                <a href="#about">About</a>
                <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#4285f4] transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="cursor-pointer relative group">
                <a href="#objective">Objective</a>
                <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#4285f4] transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="cursor-pointer relative group">
                <a href="#focus-area">Focus Area</a>
                <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#4285f4] transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="cursor-pointer relative group">
                <a href="#contact">Contact Us</a>
                <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#4285f4] transition-all duration-300 group-hover:w-full"></span>
              </li>
            </ul>
          </div>

          {/* Desktop Button and Mobile Menu Toggle */}
          <div className="flex items-center">
            <button className="px-4 md:px-8 hidden lg:flex cursor-pointer py-2 text-white font-medium text-lg bg-[#4285F4] hover:bg-[#357ABD] transition-all rounded-lg">
                <a href="https://gdg.community.dev/events/details/google-gdg-on-campus-swami-vivekanand-institute-of-engineering-technology-chandigarh-india-presents-google-ideate-20-student-innovation-challenge-2025/" target="blank">Do RSVP</a>
            </button>
            <div
              className={`rounded-full ${
                isScrolled ? "bg-[#0B7798]" : "bg-white/20 backdrop-blur-md"
              } p-2 lg:hidden cursor-pointer transition-all duration-300`}
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className={`${isScrolled ? "text-white" : "text-white"}`} size={24} />
              ) : (
                <Menu className={`${isScrolled ? "text-white" : "text-white"}`} size={24} />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-16 left-0 w-full bg-white shadow-md z-40 lg:hidden transition-all duration-300 ease-in-out transform translate-y-0">
          <div className="flex flex-col py-4 px-6">
            <ul className="flex flex-col space-y-4 font-medium text-[16px]">
              <li className="border-b border-gray-100 pb-2">
                <a href="#home" className="block hover:text-[#0B7798] transition-colors">Global Future Summit 2.0</a>
              </li>
              <li className="border-b border-gray-100 pb-2">
                <a href="#about" className="block hover:text-[#0B7798] transition-colors">About</a>
              </li>
              <li className="border-b border-gray-100 pb-2">
                <a href="#objective" className="block hover:text-[#0B7798] transition-colors">Objective</a>
              </li>
              <li className="border-b border-gray-100 pb-2">
                <a href="#focus-area" className="block hover:text-[#0B7798] transition-colors">Focus Area</a>
              </li>
              <li className="pb-2">
                <a href="#contact" className="block hover:text-[#0B7798] transition-colors">Contact Us</a>
              </li>
            </ul>
            <button className="mt-6 w-full cursor-pointer py-2 text-white font-medium text-lg bg-[#4285F4] hover:bg-[#357ABD] transition-all rounded-lg">
              Join Us
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar2;