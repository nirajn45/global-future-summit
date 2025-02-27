// import React from "react";

// const images = [
//   {
//     src: "https://img.freepik.com/premium-photo/cheerful-team-students-passed-exam_952516-105.jpg",
//     title: "Image 1",
//     description: "This is the first image description.",
//     hoverColor: "bg-red-500",
//   },
//   {
//     src: "https://img.freepik.com/premium-photo/cheerful-team-students-passed-exam_952516-105.jpg",
//     title: "Image 2",
//     description: "This is the second image description.",
//     hoverColor: "bg-blue-500",
//   },
//   {
//     src: "https://img.freepik.com/premium-photo/cheerful-team-students-passed-exam_952516-105.jpg",
//     title: "Image 3",
//     description: "This is the third image description.",
//     hoverColor: "bg-green-500",
//   },
//   {
//     src: "https://img.freepik.com/premium-photo/cheerful-team-students-passed-exam_952516-105.jpg",
//     title: "Image 4",
//     description: "This is the fourth image description.",
//     hoverColor: "bg-yellow-500",
//   },
// ];

// const Gallery = () => {
//   return (
//     <div className="w-screen">
//       {/* Heading Section */}
//       <div className="text-center mb-6">
//         <h2 className="text-4xl font-bold">Glimpses of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0b7797] to-[#16a3cc]">
//             Last Year
//             </span></h2>
//         <p className="text-gray-600 text-lg">
//           Showing you the glimpses of the last year's Global Summit Event
//         </p>
//       </div>

//       {/* Gallery Section */}
//       <div className="bg-[#025067] py-8">
//         <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4">
//           {images.map((image, index) => (
//             <div
//               key={index}
//               className="relative group overflow-hidden rounded-lg shadow-lg"
//             >
//               <img
//                 src={image.src}
//                 alt={image.title}
//                 className="w-full h-auto object-cover"
//               />
//               <div
//                 className={`absolute inset-0 ${image.hoverColor} bg-opacity-90 flex flex-col justify-center items-center opacity-0 translate-y-[-100%] group-hover:opacity-88 group-hover:translate-y-0 transition-all duration-300`}
//               >
//                 <h3 className="text-white text-lg font-bold">{image.title}</h3>
//                 <p className="text-white text-sm text-center">{image.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Gallery;


import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen">
    
      <div
  style={{
    position: 'absolute',
    top: '10%', 
    left: 0,
    right: 0,
    bottom: '10%',
    backgroundImage: "url('/src/assets/tired-man-working-office-alone-staying-late-night.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    borderRadius: '70px', 
  }}
/>

 
<div
  style={{
    position: 'absolute',
    top: '10%', 
    left: 0,
    right: 0,
    bottom: '10%', 
    background: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0) 100%)',
    borderRadius: '70px' 
  }}
/>


     
      <div className="relative z-10 h-full flex items-center pt-32">
        <div className="px-6 lg:px-16 max-w-4xl">
          <h1 
            className={`text-4xl lg:text-6xl font-bold text-white leading-tight transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
            }`}
          >
             AI/ML Convention 2025 <br />
             <span className="text-[#ca0019]">Igniting Innovation, </span> Inspiring Intelligence!

          </h1>
        </div>
      </div>
    </div>
  );
};



export default Hero;
