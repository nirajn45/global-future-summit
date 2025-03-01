import React, { useEffect, useState, useRef } from "react";
import { Sparkles, Calendar, MapPin, ChevronDown } from "lucide-react";
import videoSrc from "../assets/WhatsApp Video 2025-02-24 at 10.21.46_da7bb4ac.mp4";
import { Link } from "react-router-dom";

// Inline styles for animations and effects
const styles = {
  animatedGradient: {
    backgroundSize: "200% 200%",
    animation: "gradient-x 15s ease infinite",
  },
  "@keyframes gradient-x": {
    "0%": { backgroundPosition: "0% 50%" },
    "50%": { backgroundPosition: "100% 50%" },
    "100%": { backgroundPosition: "0% 50%" },
  },
};

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const videoRef = useRef(null);

  // Sample video URL - replace with your actual video path when integrating
  // const videoSrc = "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-city-11748-large.mp4";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 800); // Reduced delay for better UX

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const targetDate = new Date("March 8, 2025 10:00:00").getTime();

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
    updateCountdown();

    return () => clearInterval(timer);
  }, []);

  // Add keyframes to document
  useEffect(() => {
    // Create style element for keyframes
    const styleEl = document.createElement('style');
    styleEl.innerHTML = `
      @keyframes gradient-x {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
      }
      
      @keyframes pulse-glow {
        0% { box-shadow: 0 0 5px rgba(6, 182, 212, 0.3); }
        50% { box-shadow: 0 0 20px rgba(6, 182, 212, 0.6); }
        100% { box-shadow: 0 0 5px rgba(6, 182, 212, 0.3); }
      }
      
      @keyframes line-glow {
        0% { opacity: 0.2; }
        50% { opacity: 0.5; }
        100% { opacity: 0.2; }
      }
      
      @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }
      
      .animate-gradient-x {
        background-size: 200% 200%;
        animation: gradient-x 15s ease infinite;
      }
      
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
      
      .animate-pulse-glow {
        animation: pulse-glow 4s ease-in-out infinite;
      }
      
      .animate-line-glow {
        animation: line-glow 4s ease-in-out infinite;
      }
      
      .animate-bounce {
        animation: bounce 2s ease-in-out infinite;
      }
      
      .hover-scale {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      
      .hover-scale:hover {
        transform: scale(1.05);
        box-shadow: 0 0 20px rgba(6, 182, 212, 0.5);
      }
      
      .countdown-card {
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
        backdrop-filter: blur(12px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        transition: all 0.3s ease;
      }
      
      .countdown-card:hover {
        border-color: rgba(6, 182, 212, 0.5);
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.1));
        box-shadow: 0 0 15px rgba(6, 182, 212, 0.15);
      }
      
      .countdown-value {
        transition: color 0.3s ease;
      }
      
      .countdown-card:hover .countdown-value {
        color: rgb(103, 232, 249);
      }
      
      .cta-primary {
        background: linear-gradient(to right, rgb(2, 80, 103), rgb(37, 99, 235));
        transition: all 0.3s ease;
      }
      
      .cta-primary:hover {
        transform: scale(1.05);
        box-shadow: 0 0 20px rgba(6, 182, 212, 0.5);
      }
      
      .cta-secondary {
        background-color: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(12px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        transition: all 0.3s ease;
      }
      
      .cta-secondary:hover {
        background-color: rgba(255, 255, 255, 0.2);
        border-color: rgba(255, 255, 255, 0.2);
      }
      
      .gradient-text {
        background: linear-gradient(to right, rgb(103, 232, 249), white, rgb(192, 132, 252));
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }
      
      .accent-line {
        height: 1px;
        background: linear-gradient(to right, transparent, rgba(6, 182, 212, 0.3), transparent);
      }
      
      .noise-overlay {
        background-image: url('https://assets.website-files.com/62f51a90d298e35a9d331476/62f5365d32f3d060a835e206_noise.png');
        opacity: 0.03;
      }
    `;
    document.head.appendChild(styleEl);
    
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-[100vw] flex items-center justify-center bg-black overflow-hidden p-12">
      {/* Video Background with optimized loading */}
      <div className="absolute inset-0 w-full h-full">
        <video 
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Layered gradients for depth and futuristic feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#0a192f]/70" />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at center, transparent, transparent, rgba(0,0,0,0.9))'
        }} />
        
        {/* Animated grid overlay for futuristic effect */}
        <div className="absolute inset-0 noise-overlay" />
        
        {/* Accent lines */}
        <div className="absolute bottom-0 left-0 w-full accent-line animate-line-glow" />
        <div className="absolute top-0 left-0 w-full accent-line animate-line-glow" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div
          className={`space-y-8 transform transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Event Badge */}
          <div className="mx-auto mb-2 mt-28">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white text-sm font-medium animate-float">
              <Sparkles className="w-4 h-4 mr-2 text-cyan-400" />
              <span>Building a Better Future, Today</span>
            </div>
          </div>

          {/* Main Headline with animated gradient */}
          <div className=" space-y-6">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="block text-white mb-2">Welcome to</span>
              <span className="relative">
                <span className="relative z-10 gradient-text animate-gradient-x" >
                  Global Future Summit 2.0
                </span>
                <span className="absolute -bottom-1 left-0 w-full accent-line"></span>
              </span>
            </h1>
            
            <p className="text-lg md:text-lg text-white/80 max-w-3xl  leading-relaxed">
              Explore groundbreaking innovations and emerging technologies driving 
              the future of industries and society in this immersive global experience.
            </p>
            
            {/* Event details with icons */}
            <div className="flex flex-wrap  gap-6 mt-8">
              <div className="flex items-center text-white/70">
                <Calendar className="w-5 h-5 mr-2 text-cyan-400" />
                <span>March 08, 2025</span>
              </div>
              <div className="flex items-center text-white/70">
                <MapPin className="w-5 h-5 mr-2 text-cyan-400" />
                <span>Global Virtual Event</span>
              </div>
            </div>
          </div>

          {/* Countdown Timer Cards with hover effects */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mt-4 max-w-4xl ">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds }
            ].map(({ label, value }) => (
              <div 
                key={label} 
                className="countdown-card p-6 rounded-xl text-center"
              >
                <div className="countdown-value text-4xl font-bold text-white mb-1">
                  {value < 10 ? `0${value}` : value}
                </div>
                <div className="text-white/70 text-sm font-medium uppercase tracking-wider">{label}</div>
              </div>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center  gap-4 mt-4">
          <Link to="/register">
      <button className="cta-primary px-8 py-3 rounded-full text-white font-medium cursor-pointer">
        Register Now
      </button>
    </Link>
            <button className="cta-secondary px-8 py-3 rounded-full text-white font-medium">
              Download Brochure
            </button>
          </div>
          
          {/* Scroll indicator */}
          {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/50 animate-bounce">
            <span className="text-sm mb-2">Scroll to Explore</span>
            <ChevronDown className="w-5 h-5" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;