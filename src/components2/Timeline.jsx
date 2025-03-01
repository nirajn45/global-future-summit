import React, { useState, useEffect } from 'react';
import { MdBusiness, MdSchool, MdWork, MdEmojiEvents } from "react-icons/md";

const timelineEvents = [
  { time: "1st - 3rd March - Registration", description: "Participants submit PPTs from which the top 25 teams are shortlisted.", icon: <MdBusiness /> },
  { time: "4th March - Pitching Session", description: "The top 25 teams will present, and top 5 teams will be selected based on creativity, feasibility, and impact.", icon: <MdSchool /> },
  { time: "8th March - Final Presentation", description: "Top 5 teams pitch in front of HR & industry leaders.", icon: <MdWork /> },
  { time: "8th March - Winners Announcement", description: "Winners are chosen based on impact & innovation!", icon: <MdEmojiEvents /> },
];

const TimelineItem = ({ event, index, isActive }) => {
  const colors = ['bg-blue-500', 'bg-red-500', 'bg-yellow-500', 'bg-green-500'];
  const colorClass = colors[index % colors.length];
  
  return (
    <div className={`relative transition-all duration-500 ${isActive ? 'opacity-100 scale-100' : 'opacity-50 scale-95'}`}>
      <div className={`bg-white rounded-lg p-4 shadow-md transition-all duration-300 hover:shadow-xl`}>
        <div className={`${colorClass} text-white text-xs font-bold px-2 py-1 rounded-full inline-block mb-2`}>
          {event.time}
        </div>
        <p className="text-gray-700 font-medium mb-2">{event.description}</p>
      </div>
    </div>
  );
};

const GoogleTimeline = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress (0 to 1)
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / docHeight;
      setScrollProgress(progress);
      
      // Set active timeline item based on scroll position
      const index = Math.min(
        Math.floor(progress * (timelineEvents.length + 1)), 
        timelineEvents.length - 1
      );
      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-[Poppins]">
      {/* Google dots background */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 h-full w-full">
          {Array(120).fill().map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-gray-400 m-8"></div>
          ))}
        </div>
      </div>
      
      <div className="relative max-w-5xl mx-auto">
        {/* Google-style header */}
        <h1 className="text-center mb-12 text-3xl sm:text-4xl md:text-5xl font-normal">
          <span className="text-blue-500">G</span>
          <span className="text-red-500">o</span>
          <span className="text-yellow-500">o</span>
          <span className="text-blue-500">g</span>
          <span className="text-green-500">l</span>
          <span className="text-red-500">e</span>
          <span className="text-gray-700"> Ideate 2.0 Timeline</span>
        </h1>
        
        {/* Timeline */}
        <div className="relative">
          {/* Center line with progress fill and moving circle */}
          <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-1 bg-gray-200">
            <div 
              className="w-full bg-gradient-to-b from-blue-500 via-red-500 to-yellow-500"
              style={{ height: `${scrollProgress * 100}%` }}
            ></div>
            
            {/* Moving circle indicator */}
            <div 
              className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full shadow-lg border-2 border-blue-500 z-30"
              style={{ top: `${scrollProgress * 100}%` }}
            ></div>
          </div>
          
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative z-10 mb-16">
              <div className="grid grid-cols-1 md:grid-cols-9 gap-4 items-center">
                {/* Left card (for even indices) */}
                <div className={`col-span-4 ${index % 2 === 0 ? 'block' : 'hidden'} md:block md:text-right pr-4`}>
                  {index % 2 === 0 && (
                    <TimelineItem event={event} index={index} isActive={index <= activeIndex} />
                  )}
                </div>
                
                {/* Center indicator */}
                <div className="col-span-1 flex items-center justify-center z-20">
                  <div className={`w-4 h-4 rounded-full transition-all duration-300
                    ${index <= activeIndex ? 
                      (index % 2 === 0 ? 'bg-blue-500 scale-125' : 'bg-red-500 scale-125') : 
                      'bg-gray-300'}`}>
                  </div>
                </div>
                
                {/* Right card (for odd indices) */}
                <div className={`col-span-4 ${index % 2 === 1 ? 'block' : 'hidden'} md:block pl-4`}>
                  {index % 2 === 1 && (
                    <TimelineItem event={event} index={index} isActive={index <= activeIndex} />
                  )}
                </div>
                
                {/* Mobile only - all cards appear on one side (right side) */}
                <div className={`col-span-8 md:hidden pl-4 ${index % 2 === 0 ? 'hidden' : 'block'}`}>
                  <TimelineItem event={event} index={index} isActive={index <= activeIndex} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GoogleTimeline;