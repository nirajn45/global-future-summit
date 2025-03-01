import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const faqList = [
	{
		isActive: true,
		question: "Why should you attend the Global Future Summit?",
		answer:
			"Attending the Global Future Summit gives you the opportunity to connect with industry experts, gain insights into groundbreaking innovations, and participate in interactive discussions on shaping the future. Whether you're a student, professional, or entrepreneur, this summit provides valuable networking, learning, and career-building opportunities.",
	},
	{
		isActive: false,
		question: "When is the Global Future Summit taking place?",
		answer:
			"The summit is scheduled for March 8th and will feature keynote speeches, panel discussions, and interactive sessions designed to inspire and empower attendees.",
	},
	{
		isActive: false,
		question: "Will I get a certificate for attending?",
		answer:
			"Yes! Participants will receive an official Certificate of Participation, which can be a great addition to your resume and professional portfolio.",
	},
	{
		isActive: false,
		question: "What is the number of team members, including the team lead, for the Ideathon?",
		answer:
			"The Ideathon teams will consist of four members, including the team lead. Collaboration and teamwork will be essential in developing innovative solutions during the competition.",
	},
];

const FaqItem = ({ faq }) => {
	const [isOpen, setIsOpen] = useState(faq.isActive || false);

	const toggleFaq = () => setIsOpen(!isOpen);

	return (
		<div className={`${isOpen && "active"} rounded-lg`}>
			<a
				href="#!"
				className="btn p-4 lg:p-6 w-full text-start flex justify-between items-center cursor-pointer"
				onClick={toggleFaq}
			>
				<span>{faq.question}</span>
				<FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
			</a>
			<div
				className={`${
					isOpen ? "block" : "hidden"
				} p-4 lg:p-6 bg-white shadow-black dark:shadow-none border-b border-black dark:bg-white `}
			>
				<p className="opacity-50">{faq.answer}</p>
			</div>
		</div>
	);
};

FaqItem.propTypes = {
	faq: PropTypes.object.isRequired,
};

const Faq8 = () => {
	return (
		<section className="ezy__faq8 light py-14 md:py-24 bg-white dark:bg-white text-zinc-900 dark:text-black mt-14">
			<div className="container px-16 md:px-8 lg:px-28">
				<div className="grid grid-cols-12 justify-between gap-6">
					<div className="col-span-12 md:col-span-5">
					<span className="text-transparent text-4xl font-bold bg-clip-text bg-gradient-to-r from-[#0b7797] to-[#16a3cc]">
            FAQS
            </span>
						<p className=" text-1xl.5 opacity-70">
						The Global Future Summit is a premier event that brings together visionaries, innovators, and leaders from various industries to discuss emerging trends, technological advancements, and sustainable solutions for the future. This summit provides a platform for networking, knowledge-sharing, and collaboration, helping individuals and teams accelerate their impact in the global landscape.
						</p>

					</div>
					<div className="col-span-12 md:col-span-6 md:col-start-7">
						{faqList.map((faq, i) => (
							<FaqItem faq={faq} key={i} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Faq8;