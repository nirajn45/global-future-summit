import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

const speakers = [
  {
    name: "Dr. Aria Bennett",
    title: "Chief Innovation Officer",
    image: "https://i.pinimg.com/736x/5b/99/c8/5b99c84a1511ea0f7c7b78f335eedcea.jpg",
  },
  {
    name: "Jordan Liu",
    title: "Head of AI Research",
    image: "https://i.pinimg.com/736x/5b/99/c8/5b99c84a1511ea0f7c7b78f335eedcea.jpg",
  },
  {
    name: "Miles Rivera",
    title: "Blockchain Strategy",
    image: "https://i.pinimg.com/736x/5b/99/c8/5b99c84a1511ea0f7c7b78f335eedcea.jpg",
  },
  {
    name: "Samantha Lee",
    title: "VP of UX Design",
    image: "https://i.pinimg.com/736x/5b/99/c8/5b99c84a1511ea0f7c7b78f335eedcea.jpg",
  },
  {
    name: "Michael Chen",
    title: "Cybersecurity Expert",
    image: "https://i.pinimg.com/736x/5b/99/c8/5b99c84a1511ea0f7c7b78f335eedcea.jpg",
  },
];

const visibleCards = 3;

const SpeakersCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? speakers.length - visibleCards : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= speakers.length - visibleCards ? 0 : prev + 1));
  };

  return (
    <div id="speakers"
      className="relative flex flex-col items-center justify-center w-full min-h-screen"
      style={{ background: "linear-gradient(to bottom, #F0FAFC, white)" }}
    >
      <img
        src="https://i.pinimg.com/736x/27/19/7b/27197b94984736d932142de4a3238be9.jpg"
        alt="Background"
        className="absolute top-0 left-0 w-[500px] h-[500px] object-contain opacity-20"
      />

      <div className="relative z-10 flex flex-col items-center">
        <h2 className="text-6xl font-bold text-center mb-6 text-gray-900">
          Our <span className="text-[#025067]">Speakers</span>
        </h2>
        <p className="text-gray-700 text-lg mb-12">Our speakers from all over the world.</p>

        <div className="relative flex items-center justify-center w-full max-w-6xl">
          <button className="absolute left-[-50px] z-10" onClick={prevSlide}>
            <FiChevronLeft size={25} className="text-[#025067] hover:scale-110 transition-transform duration-300" />
          </button>

          <div className="overflow-hidden w-[850px]">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-12"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
            >
              {speakers.slice(currentIndex, currentIndex + visibleCards).map((speaker, index) => (
                <div key={index} className="w-[250px] flex-shrink-0 text-left">
                  <div className="w-[250px] h-80 bg-white shadow-lg overflow-hidden">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-2xl font-semibold text-gray-900">{speaker.name}</h3>
                    <p
                      className="text-sm text-white px-3 py-1 rounded w-fit mt-1 font-light"
                      style={{ backgroundColor: "#025067" }}
                    >
                      {speaker.title}
                    </p>
                    <FaLinkedin 
                      className="text-gray-500 text-xl cursor-pointer transition-colors duration-300 hover:text-blue-600 mt-2" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="absolute right-[-50px] z-10" onClick={nextSlide}>
            <FiChevronRight size={25} className="text-[#025067] hover:scale-110 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpeakersCarousel;