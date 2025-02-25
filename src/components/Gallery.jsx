import React from "react";

const images = [
  "https://i.pinimg.com/originals/64/d4/9a/64d49ab7961d710c529efbe5a2292df8.jpg", // Professional 1
  "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7", // Professional 2
  "https://images.unsplash.com/photo-1573497491208-6b1acb260507", // Professional 3
  "https://images.unsplash.com/photo-1599566150163-29194dcaad36", // Professional 4
  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61", // Professional 5
  "https://images.unsplash.com/photo-1544723795-3fb6469f5b39", // Professional 6
];

const Gallery = () => {
  return (
    <div className="bg-[#025067] text-white py-10 min-w-screen">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-white">GALLERY</h1>
      <p className="text-gray-300 text-center mt-2">Meet Some Inspiring Professionals</p>

      {/* Image Rows with Opposite Animation */}
      <div className="overflow-hidden w-full flex flex-col space-y-8 mt-6">
        {/* First Row - Moves Left */}
        <div className="relative w-full overflow-hidden">
          <div className="flex space-x-6 animate-scroll-left">
            {images.concat(images).map((img, idx) => (
              <img key={idx} src={img} alt="Professional" className="w-72 h-72 rounded-lg object-cover" />
            ))}
          </div>
        </div>

        {/* Second Row - Moves Right */}
        <div className="relative w-full overflow-hidden">
          <div className="flex space-x-6 animate-scroll-right">
            {images.concat(images).map((img, idx) => (
              <img key={idx} src={img} alt="Professional" className="w-72 h-72 rounded-lg object-cover" />
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind Keyframe Animations */}
      <style>
        {`
          @keyframes scroll-left {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          @keyframes scroll-right {
            from { transform: translateX(-50%); }
            to { transform: translateX(0); }
          }
          .animate-scroll-left {
            display: flex;
            animation: scroll-left 12s linear infinite;
            width: max-content;
          }
          .animate-scroll-right {
            display: flex;
            animation: scroll-right 12s linear infinite;
            width: max-content;
          }
        `}
      </style>
    </div>
  );
};

export default Gallery;
