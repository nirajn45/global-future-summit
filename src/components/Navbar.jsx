import React, { useState, useEffect } from "react"; 
import { Menu, X, Search, ShoppingCart } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", to: "/" },
    { name: "Get Involved", to: "/get-involved" },
    { name: "Marketplace", to: "/marketplace" },
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${isScrolled ? "bg-[#004f8a] shadow-lg" : "bg-transparent"}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <a href="/" className="text-2xl font-semibold tracking-tight text-white">
            Global Future Summit 2.O
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <a key={item.name} href={item.to} className="text-white hover:text-gray-300 transition-colors">
                {item.name}
              </a>
            ))}
          </nav>

          {/* Icons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-white hover:text-gray-300 transition-colors">
              <Search size={20} />
            </button>
            <button className="text-white hover:text-gray-300 transition-colors">
              <ShoppingCart size={20} />
            </button>
            <a href="/contact" className="bg-[#004f8a] text-white px-6 py-2 rounded-full hover:bg-[#003366] transition-all">
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-500 ${isOpen ? "block" : "hidden"}`}>
          <nav className="bg-[#004f8a] rounded-lg p-4">
            {navItems.map((item) => (
              <a key={item.name} href={item.to} className="block text-white py-2 hover:bg-[#003366] rounded-md px-3 transition-colors">
                {item.name}
              </a>
            ))}
            <a href="/contact" className="block bg-white text-[#004f8a] text-center py-2 mt-3 rounded-md hover:bg-gray-100 transition-colors">
              Contact Us
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
