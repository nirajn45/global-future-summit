import React from "react";
import defaultLogo from "../assets/glob.png"; // Import default logo

const Footer = ({ logo }) => {
  return (
    <footer className="text-gray-600 body-font  shadow-lg shadow-black w-full">
      <div className="container px-8 mx-auto flex flex-wrap items-center justify-center md:justify-between py-4">
        {/* Logo */}
        <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={logo || defaultLogo} alt="Logo" className="h-20" />
        </a>

        {/* Centered Register Button */}
        <div className="flex flex-wrap justify-center md:justify-center space-x-4 md:space-x-6 mb-4 md:mb-0">
          <a
            href="/register"
            className="p-4 bg-white rounded-lg hover:text-[#BA2027] text-black text-lg px-6 py-2 font-normal text-center"
          >
            Register
          </a>
          <a
            href="/register"
            className="p-4 bg-white rounded-lg hover:text-[#BA2027] text-black text-lg px-6 py-2 font-normal text-center"
          >
            Meet Unexpected Opportunities
          </a>
        </div>

        {/* Social Icons */}
        <span className="inline-flex flex-wrap justify-center md:justify-end space-x-4">
          <a
            href="https://www.instagram.com/theuniquesofficial?igsh=MWZ2aTV4bm0yNGliYw=="
            className="text-gray-500 hover:text-[#BA2027]"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/theuniquesofflicial/"
            className="text-gray-500 hover:text-[#BA2027]"
          >
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>

      {/* Bottom Footer Text */}
      <div className="bg-[#025067] text-white py-4">
        <div className="container mx-auto flex flex-col items-center">
          <p className="text-sm text-white text-center">@ Global Future Summit</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
