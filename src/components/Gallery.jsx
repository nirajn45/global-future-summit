import React from "react";

const images = [
  {
    src: "https://img.freepik.com/premium-photo/cheerful-team-students-passed-exam_952516-105.jpg",
    title: "Image 1",
    description: "This is the first image description.",
    hoverColor: "bg-red-500",
  },
  {
    src: "https://img.freepik.com/premium-photo/cheerful-team-students-passed-exam_952516-105.jpg",
    title: "Image 2",
    description: "This is the second image description.",
    hoverColor: "bg-blue-500",
  },
  {
    src: "https://img.freepik.com/premium-photo/cheerful-team-students-passed-exam_952516-105.jpg",
    title: "Image 3",
    description: "This is the third image description.",
    hoverColor: "bg-green-500",
  },
  {
    src: "https://img.freepik.com/premium-photo/cheerful-team-students-passed-exam_952516-105.jpg",
    title: "Image 4",
    description: "This is the fourth image description.",
    hoverColor: "bg-yellow-500",
  },
];

const Gallery = () => {
  return (
    <div className="w-screen">
      {/* Heading Section */}
      <div className="text-center mb-6">
        <h2 className="text-4xl font-bold">Glimpses of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0b7797] to-[#16a3cc]">
            Last Year
            </span></h2>
        <p className="text-gray-600 text-lg">
          Showing you the glimpses of the last year's Global Summit Event
        </p>
      </div>

      {/* Gallery Section */}
      <div className="bg-[#025067] py-8">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-auto object-cover"
              />
              <div
                className={`absolute inset-0 ${image.hoverColor} bg-opacity-90 flex flex-col justify-center items-center opacity-0 translate-y-[-100%] group-hover:opacity-88 group-hover:translate-y-0 transition-all duration-300`}
              >
                <h3 className="text-white text-lg font-bold">{image.title}</h3>
                <p className="text-white text-sm text-center">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;


