import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import imgg from '../assets/glob.png';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
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
            <div className={`fixed top-0 left-0 w-full h-16 md:h-24 flex justify-center font-[Poppins] transition-all duration-300 ease-in-out z-50 bg-white`}>
                <div className="w-full md:w-[85%] h-full flex justify-between items-center">
                    <div className="flex items-center">
                        <img src={imgg} alt="Logo" className="w-32 md:w-54 mt-2 md:mt-4" />
                    </div>

                    <div className="hidden lg:flex items-center">
                        <ul className={`flex space-x-6 xl:space-x-12 px-4 xl:px-10 font-medium text-[17px] py-3 rounded-full ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
                            {[
                                { label: 'Home', to: 'home' },
                                { label: 'About', to: 'about' },
                                { label: 'Benefits', to: 'objective' },
                                { label: 'Speakers', to: 'speakers' },
                                { label: 'Contact Us', to: 'contact' }
                            ].map((item, index) => (
                                <li key={index} className="cursor-pointer">
                                    <Link 
                                        to={item.to} 
                                        smooth={true} 
                                        duration={500} 
                                        offset={-70} 
                                        className="cursor-pointer transition-colors duration-300 hover:text-[#025067]"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex items-center">
                        <button className="px-4 md:px-8 hidden lg:flex cursor-pointer py-2 text-white font-medium text-lg bg-[#025067] hover:bg-sky-800 transition rounded-lg">Join Us</button>
                        <div className="rounded-full bg-[#025067] p-2 lg:hidden cursor-pointer" onClick={toggleMenu}>
                            {isMenuOpen ? <X className='text-white' size={24} /> : <Menu className='text-white' size={24} />}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="fixed top-16 left-0 w-full bg-white shadow-md z-40 lg:hidden transition-all duration-300 ease-in-out">
                    <div className="flex flex-col py-4 px-6">
                        <ul className="flex flex-col space-y-4 font-medium text-[16px]">
                            {[
                                { label: 'Home', to: 'home' },
                                { label: 'About', to: 'about' },
                                { label: 'Objective', to: 'objective' },
                                { label: 'Contact Us', to: 'contact' }
                            ].map((item, index) => (
                                <li key={index}>
                                    <Link 
                                        to={item.to} 
                                        smooth={true} 
                                        duration={500} 
                                        offset={-70} 
                                        onClick={() => setIsMenuOpen(false)} 
                                        className="cursor-pointer transition-colors duration-300 hover:text-[#025067]"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <button className="mt-6 w-full cursor-pointer py-2 text-white font-medium text-lg bg-[#025067] hover:bg-sky-800 transition rounded-lg">Join Us</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
