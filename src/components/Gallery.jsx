

const Portfolio2 = () => {
	

	const portfolioList = [
		{
			image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio_1_1.png",
			title: "Photography",
			categories: ["Cinematography"],
		},
		{
			image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio_1_2.png",
			title: "Web Portal Dev",
			categories: ["Product Design"],
		},
		{
			image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio_1_3.png",
			title: "Marketing",
			categories: ["Digital Marketing"],
		},
		{
			image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio_1_4.png",
			title: "Web Portal Dev",
			categories: ["UI/UX Design"],
		},
		{
			image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio_1_5.png",
			title: "VS Code Editor",
			categories: ["Specialist"],
		},
		{
			image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio_1_6.png",
			title: "Management",
			categories: ["Project Manager"],
		},
		{
			image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio_1_7.png",
			title: "Logo Design",
			categories: ["Branding"],
		},
		{
			image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio1.jpg",
			title: "Full Stack Dev",
			categories: ["Wordpress"],
		},
		{
			image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio5.jpg",
			title: "Designing",
			categories: ["Product Design"],
		},
	];

	// Handle category click


	return (
		<section className="ezy__portfolio2 light  bg-white  text-white dark:text-black">
			<div className="container w-fit px-4 mb-12">
				<div className="grid grid-cols-12 justify-center mb-6 md:mb-12">
					<div className="col-span-12 lg:col-span-6 lg:col-start-4 text-center">
						<p className="mb-2">THIS IS WHAT WE DONE IN LAST YEAR</p>
						<h2 className="text-3xl md:text-[45px] font-bold mb-6">
							MEMORIES OF THE LAST EVENT
						</h2>
					</div>

					
					</div>
				</div>
				<div className="grid grid-cols-12 gap-y-20 md:gap-16">
					{portfolioList.map((portfolio, i) => (
						<div className="col-span-12 md:col-span-6 lg:col-span-4" key={i}>
							<div className="group relative text-center">
								<img
									src={portfolio.image}
									alt={portfolio.title}
									className="max-w-full w-full h-auto rounded-xl"
								/>
<div
  className="absolute left-4 right-4 bottom-4 rounded-xl text-center p-6 translate-y-16"
  style={{ backgroundColor: "rgba(21, 160, 200, 0.4)" }} // 30% opacity
>


									<h5 className="text-xl  font-medium mb-2">{portfolio.title}</h5>
									<p className="mb-0">{portfolio.categories.join(", ")}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			
		</section>
	);
};

export default Portfolio2;
