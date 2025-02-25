import React, { useEffect, useState } from "react";
import Navbar from"./Navbar";
import videoSrc from "../assets/WhatsApp Video 2025-02-24 at 10.21.46_da7bb4ac.mp4";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeInUp = `
    opacity-0 translate-y-10
    ${isVisible ? "opacity-100 translate-y-0" : ""}
    transition-all duration-1000 ease-out
  `;

  const stats = [
    { value: "10K+", label: "Active Users" },
    { value: "50+", label: "Communities" },
    { value: "90%", label: "Waste Recycled" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <section className="relative min-h-screen min-w-screen flex items-center justify-center bg-black overflow-hidden">
  <video  
  className="absolute inset-0 w-full h-full object-cover"  
  autoPlay  
  loop  
  muted  
  playsInline  
>  
  <source src={videoSrc} type="video/mp4" />  
  Your browser does not support the video tag.  
</video>



      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#025067]/30" />

      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className={`space-y-8 ${fadeInUp}`}>
          <div className="inline-block px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm">
          🌐 Shaping Tomorrow, Today
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
            Welcome to {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0b7797] to-[#16a3cc]">
              Global Future Summit 2.O
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Explore groundbreaking innovations and emerging technologies driving the future of industries and society!!
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="p-6 rounded-lg bg-white/10 backdrop-blur-sm text-center">
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white p-1 flex items-center justify-center">
          <div className="w-1 h-3 bg-white rounded-full animate-scroll" />
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          75% {
            transform: translateY(0.5rem);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 0;
          }
        }
        .animate-scroll {
          animation: scroll 1.5s infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
