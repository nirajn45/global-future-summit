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

const ClientLogo3 = () => {
	return (
		<section className="ezy__clients3 light  bg-white dark:bg-white text-zinc-900 dark:text-black w-screen mb-14">
			<div className="text-center mb-8">
				<h2 className="font-bold text-[25px] text-black lg:text-[35px] leading-none mb-2">
					Meet Our Clients & Partners
				</h2>
			</div>
			<div className="w-full flex flex-wrap justify-center items-center">
				{clientLogos.map((client, i) => (
					<img
						src={client.logo}
						alt={client.alt}
						className="h-[50px] w-auto px-6 my-4"
						key={i}
					/>
				))}
			</div>
		</section>
	);
};

export default ClientLogo3;
