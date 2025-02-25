import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const WhyAttend = () => {
  return (
    <section className="bg-gradient-to-b min-w-screen from-blue-50 to-white py-16 px-4 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Attend{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0b7797] to-[#16a3cc]">
            Global Future Summit 2.O?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Be part of a system that values your hard work and ensures fair pay, dignity, 
            and opportunity for growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#0B7798] group-hover:bg-[#025067] transition-colors duration-300">
                    <CheckCircle className="w-6 h-6 text-[] group-hover:text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#025067]transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#025067] to-[#16a3cc] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-t-xl" />
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

const benefits = [
  {
    title: "Cutting-Edge Insights",
    description: "Stay ahead with in-depth knowledge from leading industry experts on emerging technologies, groundbreaking innovations, and the latest trends shaping the future.",
  },
  {
    title: "Networking Opportunities",
    description: "Build valuable connections with industry leaders, top researchers, and professionals from around the globe, fostering collaborations that can drive your career forward.",
  },
  {
    title: "Hands-On Learning",
    description: "Participate in immersive workshops, dynamic panel discussions, and real-world case studies designed to give you practical experience and actionable insights.",
  },
  {
    title: "Career Growth",
    description: "Unlock new job opportunities, gain mentorship from seasoned professionals, and enhance your skill set with career-focused sessions aimed at boosting your professional journey.",
  },
];

export default WhyAttend;