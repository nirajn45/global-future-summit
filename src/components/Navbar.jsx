import { useState, useEffect } from 'react';
// import '../CSS/NavBar.css';
import { Menu, X } from 'lucide-react';
import imgg from '../assets/glob.png';

const Navbar=() => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className={`fixed top-0 left-0 w-full h-16 md:h-24 flex justify-center font-[Poppins] transition-all duration-300 ease-in-out z-50 bg-white `}>
                <div className="w-[90%] md:w-[85%] h-full flex justify-between items-center">
                    <div className="flex items-center">
                        <img src={imgg} alt="Logo" className="w-32 md:w-54 mt-2 md:mt-4" />
                    </div>

                   <div className="hidden lg:flex items-center">
    <ul className={`flex space-x-6 xl:space-x-12 px-4 xl:px-10 font-medium text-[16px] py-3 rounded-full ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
        <li className="cursor-pointer relative group">
            <span>Home</span>
            <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="cursor-pointer relative group">
            <span>About</span>
            <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="cursor-pointer relative group">
            <span>Objective</span>
            <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="cursor-pointer relative group">
            <span>Focus Area</span>
            <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="cursor-pointer relative group">
            <span>Contact Us</span>
            <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </li>
    </ul>
</div>
                    
                    <div className="flex items-center">
                        <button className="px-4 md:px-8 hidden lg:flex cursor-pointer py-2 text-white font-medium text-lg bg-[#025067] hover:bg-sky-800 transition rounded-lg">Join Us</button>
                        <div 
                            className="rounded-full bg-[#025067] p-2 lg:hidden cursor-pointer"
                            onClick={toggleMenu}
                        >
                            {isMenuOpen ? 
                                <X className='text-white' size={24} /> : 
                                <Menu className='text-white' size={24} />
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="fixed top-16 left-0 w-full bg-white shadow-md z-40 lg:hidden transition-all duration-300 ease-in-out">
                    <div className="flex flex-col py-4 px-6">
                        <ul className="flex flex-col space-y-4 font-medium text-[16px]">
                            <li className="cursor-pointer py-2 border-b border-gray-100">Home</li>
                            <li className="cursor-pointer py-2 border-b border-gray-100">About</li>
                            <li className="cursor-pointer py-2 border-b border-gray-100">Objective</li>
                            <li className="cursor-pointer py-2 border-b border-gray-100">Focus Area</li>
                            <li className="cursor-pointer py-2">Contact Us</li>
                        </ul>
                        <button className="mt-6 w-full cursor-pointer py-2 text-white font-medium text-lg bg-[#025067] hover:bg-sky-800 transition rounded-lg">Join Us</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
