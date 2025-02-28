import React from "react";

const clientLogos = [
  {
    logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-1.png",
    alt: "Client Logo 1",
  },
  {
    logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-2.png",
    alt: "Client Logo 2",
  },
  {
    logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-3.png",
    alt: "Client Logo 3",
  },
  {
    logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-4.png",
    alt: "Client Logo 4",
  },
  {
    logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-5.png",
    alt: "Client Logo 5",
  },
  {
    logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-6.png",
    alt: "Client Logo 6",
  },
  {
    logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-7.png",
    alt: "Client Logo 7",
  },
  {
    logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-8.png",
    alt: "Client Logo 8",
  },
];

const ClientLogo8 = () => {
  return (
    <section className="ezy__clients8 light py-10 md:py-24 bg-white dark:bg-white text-zinc-900 dark:text-black w-full">
      <div className="w-full px-4">
        <div className="grid grid-cols-12 justify-center mb-16">
          <div className="col-span-12 lg:col-span-6 lg:col-start-4 text-center">
            <h2 className="font-bold text-6xl lg:text-6xl leading-none mb-6">
              Meet Our<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0b7797] to-[#16a3cc]">
            Community Partners
            </span>
            </h2>
            <p className="text-1xl.5 leading-6 opacity-70">
              Create an amazing carousel to display your client or partner logos
              with extensive design controls.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-6 justify-center text-center w-full">
          {clientLogos.map((client, i) => (
            <div key={i} className="col-span-1">
<div className="bg-slate-100 dark:bg-[rgba(21,160,200,0.1)] rounded-lg h-full grid place-items-center p-4 lg:p-12">


                <img
                  src={client.logo}
                  alt={client.alt}
                  className="max-h-[50px] h-auto max-w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogo8;
