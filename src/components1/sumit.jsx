import React from "react";
import techLogo from "../assets/bharattech2,0 (1).png"; // Import your local logo

const companies = [
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Facebook",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
  },
  {
    name: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg",
  },
  {
    name: "Tech and Tech",
    logo: techLogo, // Local logo from assets folder
  },
];

const CompanyLogos = () => {
  return (
    <div className="max-w-screen mx-auto py-10 text-center overflow-hidden relative bg-gray-100">
      {/* Heading Section */}
      <h2 className="text-4xl font-extrabold text-gray-900">Our Partners & Collaborators</h2>
      <p className="text-gray-500 mt-2 text-lg">Trusted by industry leaders worldwide.</p>

      {/* Scrolling Logos */}
      <div className="relative w-full overflow-hidden mt-8">
        <div className="flex space-x-10 animate-scroll">
          {companies.concat(companies).map((company, index) => (
            <div key={index} className="flex flex-col items-center min-w-[150px]">
              <img
                src={company.logo}
                alt={company.name}
                className="h-16 object-contain transition-transform duration-300 hover:scale-110"
              />
              <h5 className="mt-2 text-lg font-semibold text-gray-800">{company.name}</h5>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind Keyframe Animation */}
      <style>
        {`
          @keyframes scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .animate-scroll {
            display: flex;
            animation: scroll 15s linear infinite;
            width: max-content;
          }
        `}
      </style>
    </div>
  );
};

export default CompanyLogos;
