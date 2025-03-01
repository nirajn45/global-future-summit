import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Define timeline events
const timelineEvents = [
  { time: "9 AM", title: "Orientation", description: "Welcome session with HR, paperwork, and company policies.", icon: "🏢" },
  { time: "10 AM", title: "HR Panel", description: "Introduction to team members and workspace.", icon: "🎓" },
  { time: "11 AM", title: "Industry Panel", description: "Discuss role, responsibilities, and expectations.", icon: "👨‍💼" },
  { time: "12 PM", title: "Lunch", description: "Enjoy a welcome lunch with your team.", icon: "🍔" },
  { time: "1 PM", title: "Presentation", description: "Observe and learn from an experienced team member.", icon: "🔍" },
  { time: "3 PM", title: "Award", description: "Discuss your first impressions and set goals.", icon: "📋" },
  { time: "5 PM", title: "Vote of Thanks", description: "Wrap up and reflect on your first day.", icon: "🌿" },
];

// Circle indicator that moves with scroll and acts as a progress bar
const ScrollCircle = ({ progress }) => {
  const circleY = useTransform(progress, [0, 1], ["0%", "100%"]);
  
  return (
    <motion.div 
      className="absolute left-1/2 w-8 h-8 bg-white border-4 rounded-full z-20 transform -translate-x-1/2"
      style={{ 
        top: circleY,
        borderColor: "#025067" 
      }}
      initial={{ scale: 0.8 }}
      whileInView={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
    >
      <div className="absolute inset-0 rounded-full animate-ping opacity-30 " style={{ backgroundColor: "#025067" }}></div>
    </motion.div>
  );
};

// Main Timeline component
function Timeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ 
    target: containerRef,
    offset: ["start start", "end end"] 
  });
  
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <div
      className="timeline-container py-16 px-6 md:px-12 lg:px-24 min-h-screen"
      ref={containerRef}
      style={{ background: "linear-gradient(to bottom, white, white)" }}
    >
      <div className="max-w-5xl mx-auto relative">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#0b7797] to-[#16a3cc] bg-clip-text text-transparent text-center mb-20"
          style={{ color: "#025067" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Event Timeline
        </motion.h1>
        
        {/* Start indicator with increased gap */}
        <div className="flex justify-center mb-16">
          <motion.div 
            className="px-5 py-2 text-white rounded-full font-semibold shadow-md"
            style={{ backgroundColor: "#025067" }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            Start
          </motion.div>
        </div>
        
        {/* Timeline central line with increased gap at top and bottom */}
        <div 
          className="absolute left-1/2 top-40 bottom-32 w-1 transform -translate-x-1/2 z-0" 
          style={{ background: "linear-gradient(to bottom, #025067, #02506788)" }}
        ></div>
        
        {/* Moving circle indicator without percentage */}
        {!isMobile && <ScrollCircle progress={scrollYProgress} />}
        
        {/* Timeline items with wider cards */}
        <div className="relative lg:w-250 z-10 pb-8">
          {timelineEvents.map((event, index) => {
            const isLeftCard = index % 2 !== 0;
            
            return (
              <div key={index} className="relative mb-20 md:mb-28">
                {/* Circle marker on timeline */}
                <div 
                  className="absolute left-1/2 top-8 w-6 h-6 rounded-full transform -translate-x-1/2 z-10 shadow-md" 
                  style={{ backgroundColor: "#025067" }}
                ></div>
                
                {/* Connector line from timeline to card */}
                <div 
                  className={`hidden md:block absolute top-8 ${isLeftCard ? 'right-[calc(50%+12px)]' : 'left-[calc(50%+12px)]'} w-16 h-1`} 
                  style={{ 
                    background: `linear-gradient(to ${isLeftCard ? 'left' : 'right'}, #025067, #025067aa)`,
                  }}
                ></div>
                
                {/* Card positioned either left or right with increased width */}
                <div className="md:flex md:items-center">
                  <motion.div
                    className={`
                      timeline-item relative p-6 rounded-xl shadow-lg border 
                      ${isLeftCard 
                        ? 'md:mr-auto md:ml-0 md:w-[calc(50%-32px)]' 
                        : 'md:ml-auto md:mr-0 md:w-[calc(50%-32px)]'
                      }
                    `}
                    style={{ 
                      backgroundColor: "white",
                      borderColor: "#02506722" 
                    }}
                    initial={{ opacity: 0, y: 40, x: isLeftCard ? -20 : 20 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    {/* Header with icon */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="font-semibold py-1 px-3 rounded-full text-sm" style={{ backgroundColor: "#02506722", color: "#025067" }}>
                        {event.time}
                      </div>
                      <div className="text-3xl">{event.icon}</div>
                    </div>
                    
                    <h3 className="title text-xl font-bold mb-2" style={{ color: "#025067" }}>{event.title}</h3>
                    <p className="description text-gray-600">{event.description}</p>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* End indicator with increased gap */}
        <div className="flex justify-center mt-16">
          <motion.div 
            className="px-5 py-2 text-white rounded-full font-semibold shadow-md"
            style={{ backgroundColor: "#025067" }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            End
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;