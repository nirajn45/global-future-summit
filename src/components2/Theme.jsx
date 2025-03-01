import React from 'react';
import { motion } from 'framer-motion';
import Img from '../assets/Image.jpg'; // Ensure the image is in your assets folder

const ThemesSection = () => {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 py-12 bg-white min-h-screen w-full font-[Poppins] overflow-hidden">
      
      {/* Background Decorative Dots */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-6 w-3 h-3 md:w-4 md:h-4 rounded-full bg-blue-500 opacity-20" />
        <div className="absolute top-32 left-14 w-5 h-5 md:w-6 md:h-6 rounded-full bg-red-500 opacity-20" />
        <div className="absolute bottom-20 left-20 w-6 h-6 md:w-8 md:h-8 rounded-full bg-yellow-500 opacity-20" />
        <div className="absolute top-40 right-10 w-4 h-4 md:w-5 md:h-5 rounded-full bg-green-500 opacity-20" />
      </div>

      {/* Left Side: Image & Decorations */}
      <div className="relative w-full lg:w-1/2 mb-8 lg:mb-0 flex justify-center lg:justify-end lg:pr-12">
        
        {/* Animated Google-style vectors */}
        <motion.div
          className="absolute -top-6 -left-6 w-12 h-12 md:w-20 md:h-20 rounded-full border-4 border-blue-500 opacity-20"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 -right-6 w-10 h-10 md:w-16 md:h-16 rounded-full border-4 border-yellow-500 opacity-20"
          animate={{ scale: [1, 1.15, 1], rotate: [0, 15, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />

        {/* Image Container */}
        <motion.div
          className="relative rounded-2xl overflow-hidden border-0 shadow-lg w-full max-w-md lg:max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={Img}
            alt="Google Ideate"
            className="w-full h-auto object-cover"
          />
          
          {/* Google-style color strip */}
          <div className="absolute bottom-0 left-0 right-0 h-2 flex">
            <div className="w-1/4 bg-blue-500"></div>
            <div className="w-1/4 bg-red-500"></div>
            <div className="w-1/4 bg-yellow-500"></div>
            <div className="w-1/4 bg-green-500"></div>
          </div>
        </motion.div>
      </div>

      {/* Right Side: Content */}
      <motion.div
        className="w-full lg:w-1/2 text-center lg:text-left flex flex-col justify-center px-4 lg:px-12"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        
        {/* Google-style Badge */}
        <div className="inline-flex items-center self-center lg:self-start mb-4 px-3 py-1 rounded-full bg-gray-100 border border-gray-200">
          <div className="flex space-x-1 mr-2">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
          </div>
          <span className="text-sm font-medium text-gray-600">UN SDGs</span>
        </div>

        {/* Title with Google-style Colors */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-blue-500">G</span>
          <span className="text-red-500">o</span>
          <span className="text-yellow-500">o</span>
          <span className="text-blue-500">g</span>
          <span className="text-green-500">l</span>
          <span className="text-red-500">e</span>
          <span className="text-gray-800"> Ideate 2.0 - Theme</span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 mb-8 text-md md:text-lg leading-relaxed text-justify max-w-2xl mx-auto lg:mx-0">
          Join the journey to innovation by participating in the Ideathon inspired by the United Nations 17 Sustainable
          Development Goals. These goals are a blueprint to achieve a better and more sustainable future for all.
          Collaborate, ideate, and innovate to create solutions that address global challenges like poverty, education,
          climate action, and equality.
        </p>

        {/* Animated Google Dots */}
        <div className="absolute bottom-8 right-8 flex space-x-2">
          {['blue-500', 'red-500', 'yellow-500', 'green-500'].map((color, index) => (
            <motion.div
              key={color}
              className={`w-3 h-3 md:w-4 md:h-4 rounded-full bg-${color}`}
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: index * 0.3 }}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ThemesSection;