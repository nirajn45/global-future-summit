import React from "react";
import connections from "../assets/connections.svg"; 
import ideas from "../assets/ideas.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdjust,
  faArrowRight,
  faCheck,
  faLaptop,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";

const WhyAttend = () => {
  return (
    <section className="ezy__portfolio10 w-full light py-14 md:py-24 bg-white dark:bg-white text-black dark:text-black">
      <div className="container px-4 mx-auto">
        <div className="flex justify-center mb-20">
          <div className="max-w-3xl text-center mx-auto">
            <h2 className="text-6xl font-bold  mb-6">
              Benefits of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0b7797] to-[#16a3cc]">
            Attending
            </span>
            </h2>
            <p className="text-lg leading-8 mb-2">
            Global Future Summit – A hub for innovation!  Connect with industry leaders, engage in panel discussions, and compete in an exciting Ideathon. Shape the future! </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-6 max-w-7xl mx-auto">
          <div className="col-span-3 lg:col-span-2">
            <div className="bg-white dark:bg-white shadow-xl rounded-xl overflow-hidden h-full">
              <div className="flex flex-col md:flex-row h-full items-center">
                <div className="h-full w-full md:w-1/2">
                  <div
                    className="bg-center  bg-contain bg-no-repeat h-full min-h-[200px] md:min-h-[250px]"
                    style={{
                        backgroundImage: `url(${connections})`,
                      }}
                      
                      
                  ></div>
                </div>
                <div className="flex flex-col justify-center w-full md:w-1/2 p-4 sm:p-6 text-black dark:text-black h-full">
                  <h5 className="font-medium text-xl capitalize mb-2">
                    Build Connections Globally
                  </h5>
                  <p>
                  Build Connections Globally – Network with industry leaders, HR experts, and innovators from around the world.
                  </p>
               
                 
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-span-3 lg:col-span-1">
            <div className="bg-[#025067] text-white shadow-xl rounded-xl overflow-hidden h-full p-4 sm:p-6 flex flex-col justify-center">
              <div className="mb-4 text-4xl">
                <FontAwesomeIcon icon={faPlusSquare} />
              </div>
              <h5 className="font-medium capitalize mb-4 text-xl">
                Hands On Learning
              </h5>
              <p>
              🛠 Hands-On Learning – Gain real-world insights through panel discussions and expert-led sessions.
              </p>

            </div>
          </div>

          <div className="col-span-3 lg:col-span-1">
            <div className="bg-[#025067] text-white shadow-xl rounded-xl overflow-hidden h-full p-4 sm:p-6 flex flex-col justify-center">
              <div className="mb-4 text-4xl">
                <FontAwesomeIcon icon={faLaptop} />
              </div>
              <h3 className="font-medium capitalize mb-4 text-xl">
                Career Growth
              </h3>
              <p>
              Career Growth – Explore new opportunities, get industry exposure, and accelerate your professional journey.
              </p>
            </div>
          </div>

          <div className="col-span-3 lg:col-span-2">
            <div className="bg-white dark:white shadow-xl rounded-xl overflow-hidden h-full">
              <div className="flex flex-col md:flex-row h-full items-center">
                <div className="h-full w-full md:w-1/2">
                  <div
                    className="bg-center bg-contain bg-no-repeat h-full min-h-[200px] md:min-h-[250px]"
                    style={{
                        backgroundImage: `url(${ideas})`,
                      }}
                      
                  ></div>
                </div>
                <div className="flex flex-col justify-center w-full md:w-1/2 p-4 sm:p-6 text-black dark:text-black h-full">
                  <div className="mb-4 text-4xl">
                    <FontAwesomeIcon icon={faAdjust} />
                  </div>
                  <h3 className="font-medium capitalize mb-4 text-xl">
                    Present your Idea
                  </h3>
                  <p>Present Your Idea – Showcase your innovation in the Ideathon and turn your vision into reality.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAttend;
