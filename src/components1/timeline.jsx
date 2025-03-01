import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Users, Building, Briefcase, Coffee, Presentation, Award, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
// Define timeline events with Lucide icons and colors from the provided image
const timelineEvents = [
  { 
    time: "9 AM", 
    title: "Orientation", 
    description: "Kickstart the day with an introduction to the company’s vision, mission, and culture. This session includes a welcome address from HR, an overview of company policies, and completion of essential paperwork.", 
    icon: <Building className="w-6 h-6 text-white" />,
    color: "#005F73" // Teal from image
  },
  { 
    time: "10 AM", 
    title: "HR Panel", 
    description: "Meet the human resources team and key personnel who will guide you through your journey in the organization. Get familiar with your workspace, facilities, and available resources.", 
    icon: <Users className="w-6 h-6 text-white" />,
    color: "#005F73" // Teal from image
  },
  { 
    time: "11 AM", 
    title: "Industry Panel", 
    description: "Gain insights into industry trends and expectations from experienced professionals. Learn about the company’s role in the sector and how your contributions align with its goals.", 
    icon: <Briefcase className="w-6 h-6 text-white" />,
    color: "#005F73" // Teal from image
  },
  { 
    time: "12 PM", 
    title: "Lunch", 
    description: "Take a break and enjoy a specially arranged welcome lunch. This is a great opportunity to connect with your colleagues in a relaxed setting and build professional relationships.", 
    icon: <Coffee className="w-6 h-6 text-white" />,
    color: "#005F73" // Teal from image
  },
  { 
    time: "1 PM", 
    title: "Presentation", 
    description: "Attend a detailed presentation by a senior team member highlighting key projects, company workflow, and expectations. Gain valuable knowledge about how different teams collaborate to achieve success.", 
    icon: <Presentation className="w-6 h-6 text-white" />,
    color: "#005F73" // Teal from image
  },
  { 
    time: "3 PM", 
    title: "Award", 
    description: "Celebrate achievements and recognize outstanding performances within the company. Get inspired by success stories and learn about opportunities for growth and recognition.", 
    icon: <Award className="w-6 h-6 text-white" />,
    color: "#005F73" // Teal from image
  },
  { 
    time: "5 PM", 
    title: "Vote of Thanks", 
    description: "Conclude the day with a reflection session where key takeaways are shared. Express gratitude to speakers, mentors, and fellow participants for making the orientation a valuable experience.", 
    icon: <Leaf className="w-6 h-6 text-white" />,
    color: "#005F73" // Teal from image
  },
];


// Stats from the image
// const eventStats = [
//   { number: "1000+", label: "ATTENDEES", icon: <Users className="w-6 h-6 text-white" /> },
//   { number: "50+", label: "TECH EXHIBITS", icon: <Building className="w-6 h-6 text-white" /> },
//   { number: "10+", label: "ENTREPRENEURS", icon: <Briefcase className="w-6 h-6 text-white" /> },
//   { number: "20+", label: "SPEAKERS", icon: <Presentation className="w-6 h-6 text-white" /> },
// ];

// Progress indicator at the top
const ProgressIndicator = ({ progress }) => {
  const progressWidth = useTransform(progress, [0, 1], ["0%", "100%"]);
  
  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-gray-200">
      <motion.div 
        className="h-full bg-[#005F73]"
        style={{ width: progressWidth }}
      />
    </div>
  );
};

// Main Timeline component
function Timeline() {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHorizontal, setIsHorizontal] = useState(false);
  
  // Scroll progress
  const { scrollYProgress } = useScroll({ 
    target: containerRef,
    offset: ["start start", "end end"] 
  });
  
  // Update current index based on scroll position
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange(value => {
      const index = Math.min(
        Math.floor(value * timelineEvents.length),
        timelineEvents.length - 1
      );
      setCurrentIndex(index);
    });
    
    return () => unsubscribe();
  }, [scrollYProgress]);
  
  // Check screen size for layout
  useEffect(() => {
    const checkScreenSize = () => {
      setIsHorizontal(window.innerWidth >= 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <>
      <ProgressIndicator progress={scrollYProgress} />
      
      <div
        className="min-h-screen w-full relative overflow-hidden bg-white text-gray-800"
        ref={containerRef}
      >
        {/* Header section */}
        <div className="relative z-10 pt-20 pb-10 px-6">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-7xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#005F73]">
              Event Timeline
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow your journey through our carefully crafted schedule of events
            </p>
          </motion.div>
        </div>
        
        {/* Stats section */}
        {/* <div className="relative z-10 py-10 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {eventStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-[#005F73] text-white rounded-lg p-8 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-4xl font-bold mb-2">{stat.number}</h2>
                      <p className="text-sm font-medium">{stat.label}</p>
                    </div>
                    <div className="bg-[#00778F] p-3 rounded-full">
                      {stat.icon}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div> */}
        
        {/* Timeline content */}
        <div className="relative z-10 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Timeline track */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-[#E9ECEF] z-0 md:transform md:-translate-x-1/2"></div>
            
            {/* Timeline events */}
            <div className="relative z-10">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  className="relative mb-8 md:flex md:justify-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Event marker */}
                  <div 
                    className="absolute left-0 md:left-1/2 top-0 w-8 h-8 rounded-full bg-[#005F73] flex items-center justify-center z-20 md:transform md:-translate-x-1/2 shadow-lg"
                  >
                    <div className="relative">
                      {event.icon}
                      <div className="absolute inset-0 rounded-full animate-ping opacity-30 bg-[#005F73]" />
                    </div>
                  </div>
                  
                  {/* Event card */}
                  <motion.div
                    className={`
                      relative md:ml-0 p-6 rounded-lg shadow-lg bg-white border border-gray-200
                      md:w-[calc(50%-40px)] md:max-w-md
                      ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}
                    `}
                    whileHover={{ 
                      
                      boxShadow: "0 10px 30px rgba(0, 95, 115, 0.1)",
                      borderColor: "#005F73"
                    }}
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {/* Time badge */}
                    <div className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 bg-[#E9ECEF] text-[#005F73]">
                      {event.time}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 text-[#005F73]">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                    
                    {/* Interactive button */}
                    {/* <motion.button
                      className="mt-4 px-4 py-2 rounded-lg text-sm font-medium bg-white text-[#005F73] border border-[#005F73]"
                      whileHover={{ 
                        backgroundColor: "#005F73",
                        color: "white",
                        scale: 1.05
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn more
                    </motion.button> */}
                  </motion.div>
                  
                  {/* Connector line for desktop */}
                  <div 
                    className={`
                      hidden md:block absolute top-4 h-0.5 bg-[#E9ECEF] w-[40px] z-10
                      ${index % 2 === 0 ? 'left-[calc(50%-40px)]' : 'right-[calc(50%-40px)]'}
                    `}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Footer CTA */}
        <div className="relative z-10 py-20 px-6 bg-[#E9ECEF]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#005F73]">
              Ready to Begin Your Journey?
            </h2>
            <Link to="/register">
            <motion.button
              className="px-8 cursor-pointer py-4 rounded-full text-lg font-semibold text-white bg-[#005F73] relative overflow-hidden group shadow-lg"
              whileHover={{ 
                
                boxShadow: "0 10px 25px rgba(0, 95, 115, 0.3)"
              }}
              // whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Register Now</span>
              <span className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Timeline;