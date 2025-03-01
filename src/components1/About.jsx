import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-white py-20 px-6 font-[Poppins] overflow-hidden w-full">
      <div className="max-w-7xl mx-auto text-center relative">
        {/* Background Elements */}
        <div className="absolute opacity-10 top-40 -right-32 w-96 h-96 rounded-full border-4 border-[#02A8A8] hidden xl:block"></div>

        {/* Section Heading */}
        <h2 className="text-lg tracking-[13px] font-semibold text-black mb-6 relative inline-block">
          ABOUT 
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#025067] to-[#02A8A8] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
          <p className="leading-[60px] tracking-normal text-6xl bg-gradient-to-r from-[#0b7797] to-[#16a3cc] bg-clip-text text-transparent font-bold mt-4">Global Future Summit 2.0 2025</p>
        </h2>

        {/* Tagline */}
        <p className="text-lg text-gray-600 mb-12 relative bottom-4">
          Where Innovation Meets <span className='text-[#025067] font-medium'>Opportunities</span>
        </p>

        <div className="relative bottom-10 max-w-4xl mx-auto">
          <p className="text-lg font-light">
            The Global Future Summit 2.0 is a groundbreaking event uniting innovators, industry leaders, and changemakers to shape the future of technology and sustainability. Focused on AI, blockchain, and emerging tech, the summit fosters collaboration to solve real-world challenges. With cutting-edge keynotes, interactive sessions, and high-stakes pitch battles, it's where bold ideas meet global impact. This is more than an event— <span className='text-[#025067] font-semibold'>it's a movement towards a smarter, more connected world</span>. Join us and be part of the future!
          </p>
        </div>

        {/* Feature Blocks */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Feature 1: Global Innovation */}
          <div className="relative bg-white rounded-xl shadow-2xl p-8 overflow-hidden border border-[#025067]/10">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#025067]/5 to-[#02A8A8]/5 z-0"></div>
            {/* Icon */}
            <div className="text-[#025067] mb-6 relative z-10">
              <p className="text-6xl bg-gradient-to-r from-[#025067] to-[#02A8A8] bg-clip-text text-transparent font-bold">01</p>
            </div>
            
            <h3 className="text-2xl font-bold text-[#025067] mb-4 relative z-10">Global Convergence</h3>
            <p className="text-gray-600 relative z-10">
              Connect with visionaries from six continents, exploring breakthrough technologies and forging partnerships that transcend borders.
            </p>
            {/* Logo */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto text-[#025067] relative top-7 opacity-60 left-40" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
            </svg>
            {/* Decorative Element */}
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#02A8A8]/20 rounded-full z-0"></div>
            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-[#025067]/10 rounded-full z-0"></div>
          </div>
          
          {/* Feature 2: Future Technologies */}
          <div className="relative bg-white rounded-xl shadow-2xl p-8 overflow-hidden border border-[#025067]/10">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#025067]/5 to-[#02A8A8]/5 z-0"></div>
            {/* Icon */}
            <div className="text-[#025067] mb-6 relative z-10">
              <p className="text-6xl bg-gradient-to-r from-[#025067] to-[#02A8A8] bg-clip-text text-transparent font-bold">02</p>
            </div>
            
            <h3 className="text-2xl font-bold text-[#025067] mb-4 relative z-10">Future Technologies</h3>
            <p className="text-gray-600 relative z-10">
              Immerse yourself in AI, quantum computing, and next-gen sustainable solutions shaping our collective tomorrow.
            </p>
            {/* Logo */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto text-[#025067] relative top-7 opacity-60 left-40" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
              <path fillRule="evenodd" d="M5 4a1 1 0 00-1 1v1h1V4z" clipRule="evenodd" />
            </svg>
            {/* Decorative Element */}
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#02A8A8]/20 rounded-full z-0"></div>
            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-[#025067]/10 rounded-full z-0"></div>
          </div>
          
          {/* Feature 3: Sustainable Future */}
          <div className="relative bg-white rounded-xl shadow-2xl p-8 overflow-hidden border border-[#025067]/10">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#025067]/5 to-[#02A8A8]/5 z-0"></div>
            {/* Icon */}
            <div className="text-[#025067] mb-6 relative z-10">
              <p className="text-6xl bg-gradient-to-r from-[#025067] to-[#02A8A8] bg-clip-text text-transparent font-bold">03</p>
            </div>
            
            <h3 className="text-2xl font-bold text-[#024E68] mb-4 relative z-10">Sustainable Growth</h3>
            <p className="text-gray-600 relative z-10">
              Explore innovations that balance economic prosperity with environmental stewardship for a thriving global ecosystem.
            </p>
            {/* Logo */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto text-[#025067] relative top-7 opacity-60 left-40" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
            </svg>
            {/* Decorative Element */}
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#024E68]/20 rounded-full z-0"></div>
            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-[#024E68]/10 rounded-full z-0"></div>
          </div>
        </div>

        {/* Global Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 bg-[#024E68] rounded-xl text-white">
            <h4 className="text-4xl font-bold mb-2">1,000+</h4>
            <p className="text-sm uppercase tracking-wider">Attendees</p>
          </div>
          
          <div className="p-6 bg-[#024E68] rounded-xl text-white">
            <h4 className="text-4xl font-bold mb-2">50+</h4>
            <p className="text-sm uppercase tracking-wider">Tech Exhibits</p>
          </div>
          
          <div className="p-6 bg-[#024E68] rounded-xl text-white">
            <h4 className="text-4xl font-bold mb-2">10+</h4>
            <p className="text-sm uppercase tracking-wider">Entrepreneurs</p>
          </div>
          
          <div className="p-6 bg-[#024E68] rounded-xl text-white">
            <h4 className="text-4xl font-bold mb-2">20+</h4>
            <p className="text-sm uppercase tracking-wider">Speakers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;