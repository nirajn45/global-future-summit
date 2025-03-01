// import React from "react";
// import { motion } from "framer-motion";
// import { CheckCircle } from "lucide-react";

// const WhyAttend = () => {
//   return (
//     <section  id="objective" className="bg-gradient-to-b min-w-screen from-blue-50 to-white py-16 px-4 md:px-16 overflow-hidden relative" a12>
//       {/* Earth Vector Background */}
//       <div className="absolute inset-0 opacity-15 overflow-hidden pointer-events-none">
//         {/* Main Earth Grid */}
//         <div className="absolute w-full h-full">
//           <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
//             {/* Earth Grid */}
//             <circle cx="400" cy="400" r="300" fill="none" stroke="#0B7798" strokeWidth="1.5" strokeDasharray="5,5" />
//             <circle cx="400" cy="400" r="250" fill="none" stroke="#0B7798" strokeWidth="1" />
//             <ellipse cx="400" cy="400" rx="300" ry="150" fill="none" stroke="#0B7798" strokeWidth="1" />
//             <ellipse cx="400" cy="400" rx="300" ry="150" fill="none" stroke="#0B7798" strokeWidth="1" transform="rotate(30 400 400)" />
//             <ellipse cx="400" cy="400" rx="300" ry="150" fill="none" stroke="#0B7798" strokeWidth="1" transform="rotate(60 400 400)" />
//             <ellipse cx="400" cy="400" rx="300" ry="150" fill="none" stroke="#0B7798" strokeWidth="1" transform="rotate(90 400 400)" />
//             <ellipse cx="400" cy="400" rx="300" ry="150" fill="none" stroke="#0B7798" strokeWidth="1" transform="rotate(120 400 400)" />
//             <ellipse cx="400" cy="400" rx="300" ry="150" fill="none" stroke="#0B7798" strokeWidth="1" transform="rotate(150 400 400)" />
            
//             {/* Connection Points */}
//             <circle cx="550" cy="250" r="5" fill="#16a3cc" />
//             <circle cx="250" cy="550" r="5" fill="#16a3cc" />
//             <circle cx="650" cy="400" r="5" fill="#16a3cc" />
//             <circle cx="150" cy="400" r="5" fill="#16a3cc" />
//             <circle cx="400" cy="150" r="5" fill="#16a3cc" />
//             <circle cx="400" cy="650" r="5" fill="#16a3cc" />
            
//             {/* Connection Lines */}
//             <path d="M550,250 L650,400" stroke="#16a3cc" strokeWidth="1.5" strokeDasharray="5,3" />
//             <path d="M250,550 L150,400" stroke="#16a3cc" strokeWidth="1.5" strokeDasharray="5,3" />
//             <path d="M400,150 L550,250" stroke="#16a3cc" strokeWidth="1.5" strokeDasharray="5,3" />
//             <path d="M400,650 L250,550" stroke="#16a3cc" strokeWidth="1.5" strokeDasharray="5,3" />
//           </svg>
//         </div>
//       </div>
//       <div className="max-w-6xl mx-auto relative z-10">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
//             Why Attend{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0b7797] to-[#16a3cc]">
//             Global Future Summit 2.O?
//             </span>
//           </h2>
//           <p className="text-xl text-1xl.5 text-gray-600 max-w-2xl mx-auto leading-relaxed">
//             Be part of a system that values your hard work and ensures fair pay, dignity, 
//             and opportunity for growth.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8 mt-12">
//           {benefits.map((benefit, index) => (
//             <div
//               key={index}
//               className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
//             >
//               <div className="flex items-start space-x-4">
//                 <div className="flex-shrink-0">
//                   <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#0B7798] group-hover:bg-[#025067] transition-colors duration-300">
//                     <CheckCircle className="w-6 h-6 text-[] group-hover:text-white" />
//                   </div>
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-[#025067]transition-colors duration-300">
//                     {benefit.title}
//                   </h3>
//                   <p className="text-gray-600 text-1xl.5 leading-relaxed">
//                     {benefit.description}
//                   </p>
//                 </div>
//                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#025067] to-[#16a3cc] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-t-xl" />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const benefits = [
//   {
//     title: "Cutting-Edge Insights",
//     description: "Stay ahead with in-depth knowledge from leading industry experts on emerging technologies, groundbreaking innovations, and the latest trends shaping the future.",
//   },
//   {
//     title: "Networking Opportunities",
//     description: "Build valuable connections with industry leaders, top researchers, and professionals from around the globe, fostering collaborations that can drive your career forward.",
//   },
//   {
//     title: "Hands-On Learning",
//     description: "Participate in immersive workshops, dynamic panel discussions, and real-world case studies designed to give you practical experience and actionable insights.",
//   },
//   {
//     title: "Career Growth",
//     description: "Unlock new job opportunities, gain mentorship from seasoned professionals, and enhance your skill set with career-focused sessions aimed at boosting your professional journey.",
//   },
// ];

// export default WhyAttend;

import React from "react";
import connections from "../assets/connections.svg"; 
import ideas from "../assets/ideas.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdjust,
  faArrowRight,
  faCheck,
  faLaptop,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";

const WhyAttend = () => {
  return (
    <section className="ezy__portfolio10 w-full light py-14 md:py-24 bg-white dark:bg-white text-black dark:text-black">
      <div className="container px-4 mx-auto">
        <div className="flex justify-center mb-20">
          <div className="max-w-3xl text-center mx-auto">
            <h2 className="text-6xl font-bold  mb-6">
              Benefits of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0b7797] to-[#16a3cc]">
            Attending
            </span>
            </h2>
            <p className="text-lg leading-8 mb-2">
            🌍 Global Future Summit – A hub for innovation!  Connect with industry leaders, engage in panel discussions, and compete in an exciting Ideathon. Shape the future! </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-6 max-w-7xl mx-auto">
          <div className="col-span-3 lg:col-span-2">
            <div className="bg-white dark:bg-white shadow-xl rounded-xl overflow-hidden h-full">
              <div className="flex flex-col md:flex-row h-full items-center">
                <div className="h-full w-full md:w-1/2">
                  <div
                    className="bg-center  bg-contain bg-no-repeat h-full min-h-[200px] md:min-h-[250px]"
                    style={{
                        backgroundImage: `url(${connections})`,
                      }}
                      
                      
                  ></div>
                </div>
                <div className="flex flex-col justify-center w-full md:w-1/2 p-4 sm:p-6 text-black dark:text-black h-full">
                  <h5 className="font-medium text-xl capitalize mb-2">
                    Build Connections Globally
                  </h5>
                  <p>
                  🌍 Build Connections Globally – Network with industry leaders, HR experts, and innovators from around the world.
                  </p>
               
                 
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-span-3 lg:col-span-1">
            <div className="bg-[#025067] text-white shadow-xl rounded-xl overflow-hidden h-full p-4 sm:p-6 flex flex-col justify-center">
              <div className="mb-4 text-4xl">
                <FontAwesomeIcon icon={faPlusSquare} />
              </div>
              <h5 className="font-medium capitalize mb-4 text-xl">
                Hands On Learning
              </h5>
              <p>
              🛠 Hands-On Learning – Gain real-world insights through panel discussions and expert-led sessions.
              </p>

            </div>
          </div>

          <div className="col-span-3 lg:col-span-1">
            <div className="bg-[#025067] text-white shadow-xl rounded-xl overflow-hidden h-full p-4 sm:p-6 flex flex-col justify-center">
              <div className="mb-4 text-4xl">
                <FontAwesomeIcon icon={faLaptop} />
              </div>
              <h3 className="font-medium capitalize mb-4 text-xl">
                Career Growth
              </h3>
              <p>
              📈 Career Growth – Explore new opportunities, get industry exposure, and accelerate your professional journey.
              </p>
            </div>
          </div>

          <div className="col-span-3 lg:col-span-2">
            <div className="bg-white dark:white shadow-xl rounded-xl overflow-hidden h-full">
              <div className="flex flex-col md:flex-row h-full items-center">
                <div className="h-full w-full md:w-1/2">
                  <div
                    className="bg-center bg-contain bg-no-repeat h-full min-h-[200px] md:min-h-[250px]"
                    style={{
                        backgroundImage: `url(${ideas})`,
                      }}
                      
                  ></div>
                </div>
                <div className="flex flex-col justify-center w-full md:w-1/2 p-4 sm:p-6 text-black dark:text-black h-full">
                  <div className="mb-4 text-4xl">
                    <FontAwesomeIcon icon={faAdjust} />
                  </div>
                  <h3 className="font-medium capitalize mb-4 text-xl">
                    Present your Idea
                  </h3>
                  <p>💡 Present Your Idea – Showcase your innovation in the Ideathon and turn your vision into reality.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAttend;
