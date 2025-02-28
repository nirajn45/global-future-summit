import newImage from "../assets/new.jpg"; // Single image

function AboutUs() {
  return (
    <section id="about" className="py-16 mt-20 mb-10 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Side - Single Image */}
        <div className="lg:w-1/2 mt-8 flex justify-center relative">
          <img 
            src={newImage} 
            alt="About Us" 
            className="w-[450px] h-[400px] rounded-lg object-cover"
          />
        </div>

        {/* Right Side - Content */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">
            What is <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0b7797] to-[#16a3cc]">
            Global Future Summit
            </span>
          </h1>
          <p className="text-slate-700 mb-6">
            The Global Future Summit 2.0 – 2025 is a premier event for industry 
            leaders and HR professionals to explore emerging career trends, future-ready 
            skills, and transformative insights. It features panel discussions and 
            expert dialogues, helping attendees gain valuable perspectives, expand 
            networks, and develop strategies to thrive in a changing work environment. 
            The summit offers a key opportunity to connect, learn, and grow, staying 
            ahead in the evolving job market.
          </p>
          
          {/* Quote */}
          <div className="border-l-4 border-[#0b7797] pl-6 my-8">
            <p className="text-slate-700 italic">
              "Unlock new opportunities, gain expert insights, and stay ahead in the future of work!"
            </p>
            <p className="text-slate-900 font-semibold mt-2">- SVIET</p>
          </div>

          {/* Standard Button */}
          <button className="bg-[#0b7797] hover:bg-[#16a3cc] text-white px-6 py-3 rounded-lg mt-4 transition-all duration-300">
            READ MORE
          </button>

        </div>
      </div>
    </section>
  );
}

export default AboutUs;