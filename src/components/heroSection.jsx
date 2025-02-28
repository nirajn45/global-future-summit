import React, { useEffect, useState } from "react"; 
import videoSrc from "../assets/WhatsApp Video 2025-02-24 at 10.21.46_da7bb4ac.mp4";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setIsVisible(true);

    // Target date: March 8, 2025
    const targetDate = new Date("March 8, 2025 00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown(); // Run immediately

    return () => clearInterval(timer);
  }, []);

  const fadeInUp = `
    opacity-0 translate-y-10
    ${isVisible ? "opacity-100 translate-y-0" : ""}
    transition-all duration-1000 ease-out
  `;

  return (
    <section className="relative min-h-screen min-w-screen flex items-center justify-center bg-black overflow-hidden">
      <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted playsInline>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#025067]/30" />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className={`${fadeInUp} space-y-8`}>
          {/* Intro Banner */}
          <div className="inline-block px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm">
            🌐Building a Better Future, Today
            🌐Building a Better Future, Today
          </div>

          <h1 className="text-4xl md:text-6xl text-center md:text-left lg:ml-28 lg:text-7xl font-bold text-white">
            Welcome to <br />
            <span className="text-transparent bg-clip-text bg-white">
              Global Future Summit 2.O
            </span>
          </h1>

          <p className="text-lg md:text-xl text-center md:text-left lg:ml-28 text-gray-300 max-w-3xl mx-auto md:mx-0 leading-relaxed">
            Explore groundbreaking innovations and emerging technologies driving the future of industries and society!
          </p>

          {/* Countdown Timer Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => {
              const value = [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds][index];
              return (
                <div key={label} className="p-6 rounded-lg bg-white/10 backdrop-blur-sm text-center">
                  <div className="text-3xl font-bold text-white mb-1">{value}</div>
                  <div className="text-gray-300 text-sm">{label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white p-1 flex items-center justify-center">
          <div className="w-1 h-3 bg-white rounded-full animate-scroll" />
        </div>
      </div>

      {/* Scroll Animation Keyframes */}
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