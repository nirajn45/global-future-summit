import React from "react";
import defaultLogo from "../assets/ideate.png"; // Import default logo

const Footer2 = ({ logo }) => {
  return (
    <footer className="text-gray-600 body-font bg-gray-100 shadow-lg shadow-black w-full font-[Poppins]">
      <div className="container px-8 mx-auto flex flex-nowrap items-center justify-between py-4">
        {/* Logo and RSVP Button */}
        <div className="flex items-center space-x-2 md:space-x-6">
          {/* Logo */}
          <a href="/" className="flex title-font font-medium items-center text-gray-900">
            <img src={logo || defaultLogo} alt="Logo" className="w-24 md:w-32" />
          </a>

          {/* RSVP Button */}
          <a
            href="https://gdg.community.dev/events/details/google-gdg-on-campus-swami-vivekanand-institute-of-engineering-technology-chandigarh-india-presents-google-ideate-20-student-innovation-challenge-2025/" target="blank"
            className="bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm md:text-lg px-4 py-2 md:px-6 md:py-2 font-normal text-center transition-all"
          >
            RSVP
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-2 md:space-x-4">
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
              className="w-4 h-4 md:w-5 md:h-5"
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
              className="w-4 h-4 md:w-5 md:h-5"
              viewBox="0 0 24 24"
            >
              <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom Footer Text */}
      <div className="bg-[#4285F4] text-white py-4">
        <div className="container mx-auto flex flex-col items-center">
          <p className="text-sm text-white text-center">
            @ 2025, All rights reserved by The Uniques Community
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;