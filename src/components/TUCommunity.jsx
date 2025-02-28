import React from "react";
import PropTypes from "prop-types";
import { FaLightbulb, FaUsers, FaTools, FaChartLine } from "react-icons/fa"; // Importing React icons
import Join from "../assets/workspace.png";
import Unique from "../assets/theuniquesCommunity.png"; // Importing tu.png

const stories = [
    { text: "Innovation & Creativity", icon: FaLightbulb }, // Lightbulb for Innovation
    { text: "Collaboration & Networking", icon: FaUsers }, // Users for Collaboration
    { text: "Skill Development", icon: FaTools }, // Tools for Skill Development
    { text: "Opportunities & Growth", icon: FaChartLine }, // Chart for Growth
];

const StoryItem = ({ item, index }) => {
    const IconComponent = item.icon; // Extract the icon component
    return (
        <>
            <div className="mb-4 flex items-center">
                <IconComponent className="text-[#BA2027] mr-2 text-lg" /> {/* Red React Icon */}
                <span className="opacity-75 text-sm">{item.text}</span>
            </div>
            {index !== stories.length - 1 && <hr className="w-11/12 my-2" />}
        </>
    );
};

StoryItem.propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
};

const TUC = () => {
    return (
        <section className="ezy__about9 light py-14 px-30 md:py-24 bg-white dark:bg-white text-black dark:text-black">
            <div className="container px-4">
                <div className="grid grid-cols-12 items-center gap-4 mb-12">
                    {/* Left Column */}
                    <div className="col-span-12 lg:col-span-6">
                        {/* Replacing the H1 heading with the tu.png image */}
                        <img src={Unique} alt="The Uniques Community" className="w-36 h-auto mb-4" />
                        
                        <hr className="bg-[#025067] h-1 rounded-[3px] w-12 opacity-100 my-6" />
                        <p className="opacity-70 mb-2">
                            The Uniques Community is an inclusive platform for innovation, collaboration, and skill development, uniting passionate individuals to create, learn, and grow together.
                        </p>
                        <ul className="flex flex-col ezy__about9-features mt-5">
                            {stories.map((item, i) => (
                                <li key={i}>
                                    <StoryItem item={item} index={i} />
                                </li>
                            ))}
                        </ul>
                        <div className="mt-12">
                            <button className="bg-[#025067] text-white dark:bg-[#025067] dark:text-white hover:bg-opacity-90 rounded-md px-5 py-2 transition">
                                <a href="https://theuniques.in/">Learn More</a>
                            </button>
                        </div>
                    </div>
                    
                    {/* Right Column */}
                    <div className="col-span-12 lg:col-span-6">
                        <div className="mt-12 lg:mt-0">
                            <img
                                src={Join}
                                alt="About Us"
                                className="max-w-full h-auto rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TUC;