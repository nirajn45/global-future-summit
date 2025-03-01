"use client";

import { ArrowUpRight } from "lucide-react";

const GDGCampusLanding = () => {
  return (
    <div className="relative w-full min-h-screen font-[Poppins] px-8 py-12 flex flex-col items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gray-200 opacity-20 animate-gradient blur-3xl -z-10"></div>

      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
          <span className="text-[#4285F4]">G</span>
          <span className="text-[#DB4437]">o</span>
          <span className="text-[#F4B400]">o</span>
          <span className="text-[#4285F4]">g</span>
          <span className="text-[#0F9D58]">l</span>
          <span className="text-[#DB4437]">e</span>
          <span className="text-gray-900"> Ideate </span>
          <span className="text-[#4285F4]">2</span>
          <span className="text-[#DB4437]">.</span>
          <span className="text-[#F4B400]">0</span>
        </h1>
        <p className="text-xl font-medium text-gray-700 mt-4">
          🚀 Innovate | 🌍 Collaborate | 💡 Build the Future
        </p>
      </div>

      {/* Info Section */}
      <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl">
        {/* What is Ideate 2.0? */}
        <div className="p-6 rounded-lg border-l-8 bg-white border-t border-r border-b border-[#4285F4]">
          <h3 className="text-2xl font-semibold text-[#4285F4]">🌟 What is Ideate 2.0?</h3>
          <ul className="mt-4 space-y-3 text-gray-800 list-disc list-inside">
            <li>A unique interdepartmental ideathon</li>
            <li>Hosted under GDG on Campus SVIET</li>
            <li>Part of Global Futures Summit 2025</li>
            <li>Aligned with Google Solution Challenge</li>
          </ul>
        </div>

        {/* Why Participate? */}
        <div className="p-6 rounded-lg border-l-8 bg-white border-t border-r border-b border-[#DB4437]">
          <h3 className="text-2xl font-semibold text-[#DB4437]">🚀 Why Participate?</h3>
          <ul className="mt-4 space-y-3 text-gray-800 list-disc list-inside">
            <li>Solve real-world problems</li>
            <li>Receive mentorship from experts</li>
            <li>Win prizes & career opportunities</li>
            <li>Network with industry leaders</li>
          </ul>
        </div>
      </div>

{/* Stats Section */}
<div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
  <div className="p-6 w-full rounded-lg shadow-lg border-b-4 border-[#F4B400] text-center bg-white">
    <h3 className="text-3xl font-bold text-[#F4B400]">20+</h3>
    <p className="text-gray-700">Workshops</p>
  </div>

  <div className="p-6 w-full rounded-lg shadow-lg border-b-4 border-[#4285F4] text-center bg-white">
    <h3 className="text-3xl font-bold text-[#4285F4]">30+</h3>
    <p className="text-gray-700">Sessions</p>
  </div>

  <div className="p-6 w-full rounded-lg shadow-lg border-b-4 border-[#0F9D58] text-center bg-white">
    <h3 className="text-3xl font-bold text-[#0F9D58]">800+</h3>
    <p className="text-gray-700">Members</p>
  </div>
</div>


      {/* Custom Tailwind Animation */}
      <style jsx global>{`
        @keyframes gradientAnimation {
          0% { transform: translateY(-50px) scale(1.2); }
          50% { transform: translateY(50px) scale(1.1); }
          100% { transform: translateY(-50px) scale(1.2); }
        }
        .animate-gradient {
          animation: gradientAnimation 8s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  );
};

export default GDGCampusLanding;