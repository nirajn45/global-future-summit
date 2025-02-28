import React from "react";

const Timeline = () => {
  const steps = [
    {
      id: "01",
      title: "Inauguration",
      description:
        "10:00 AM - 11:00 AM",
      align: "left",
    },
    {
      id: "02",
      title: "Industrialist Discussion ",
      description:
        "11:00 AM - 12:00 PM",
      align: "right",
    },
    {
      id: "03",
      title: "Top 5 teams presentation",
      description:
        "12:00 PM - 01:00 PM",
      align: "left",
    },
    {
        id: "04",
        title: "HR Panel Discussion ",
        description:
          "01:00 PM - 02:00 PM",
        align: "right",
      }
  ];

  return (
    <div className="max-w-3xl mx-auto p-4 w-full text-center">
      <h2 className="text-4xl font-semibold mb-8">Time<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0b7797] to-[#16a3cc]">
            Line
            </span></h2> 
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-400 top-10 bottom-10"></div>
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center w-full mb-8 relative">
            <div className="w-1/2 text-right pr-4">
              {step.align === "left" && (
                <>
                  <h3 className="text-lg font-bold text-[#025067]">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </>
              )}
            </div>
            <div className="relative w-1/12 flex flex-col items-center">
              <div className="w-10 h-10 bg-white border-2 border-gray-400 text-gray-700 font-bold rounded-full flex items-center justify-center">
                {step.id}
              </div>
            </div>
            <div className="w-1/2 text-left pl-4">
              {step.align === "right" && (
                <>
                  <h3 className="text-lg text-2xl justify-center font-bold text-[#025067]">{step.title}</h3>
                  <p className="text-gray-600 text-1.5xl">{step.description}</p>
                </>
              )}
            </div>
          </div>
        ))}
        <div className="text-center text-2xl font-bold text-gray-700 mt-4">END</div>
      </div>
    </div>
  );
};

export default Timeline;

