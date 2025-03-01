import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, Sparkles, Brain, Calendar, Users } from "lucide-react";

// FAQ data
const faqList = [
  {
    id: 1,
    question: "Why should you attend the Global Future Summit?",
    answer:
      "Attending the Global Future Summit gives you the opportunity to connect with industry experts, gain insights into groundbreaking innovations, and participate in interactive discussions on shaping the future. Whether you're a student, professional, or entrepreneur, this summit provides valuable networking, learning, and career-building opportunities.",
    // icon: <Sparkles className="w-6 h-6 text-[#025067]" />
  },
  {
    id: 2,
    question: "When is the Global Future Summit taking place?",
    answer:
      "The summit is scheduled for March 8th and will feature keynote speeches, panel discussions, and interactive sessions designed to inspire and empower attendees.",
    // icon: <Calendar className="w-6 h-6 text-[#025067]" />
  },
  {
    id: 3,
    question: "Will I get a certificate for attending?",
    answer:
      "Yes! Participants will receive an official Certificate of Participation, which can be a great addition to your resume and professional portfolio.",
    // icon: <HelpCircle className="w-6 h-6 text-[#025067]" />
  },
  {
    id: 4,
    question: "What is the number of team members, including the team lead, for the Ideathon?",
    answer:
      "The Ideathon teams will consist of four members, including the team lead. Collaboration and teamwork will be essential in developing innovative solutions during the competition.",
    // icon: <Users className="w-6 h-6 text-[#025067]" />
  },
];

// FAQ Item Component
const FaqItem = ({ faq, isOpen, toggleFaq }) => {
  return (
    <motion.div 
      className="mb-4 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: faq.id * 0.1 }}
    >
      <div 
        onClick={() => toggleFaq(faq.id)}
        className={`
          flex justify-between items-center p-5 cursor-pointer rounded-lg
          ${isOpen ? "bg-[#025067] text-white" : "bg-white text-gray-800"}
          border border-[#025067]/20 hover:border-[#025067]/50
          transition-all duration-300 ease-in-out
          shadow-lg hover:shadow-xl
        `}
      >
        <div className="flex items-center space-x-4">
          <div className={`${isOpen ? "text-white" : "text-[#025067]"} transition-colors duration-300`}>
            {faq.icon}
          </div>
          <h3 className="font-medium text-lg">{faq.question}</h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? 
            <Minus className={`w-5 h-5 ${isOpen ? "text-white" : "text-[#025067]"}`} /> : 
            <Plus className={`w-5 h-5 ${isOpen ? "text-white" : "text-[#025067]"}`} />
          }
        </motion.div>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white border-x border-b border-[#025067]/20 rounded-b-lg overflow-hidden"
          >
            <div className="p-5 text-gray-600">
              <p>{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const [openId, setOpenId] = useState(1);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full py-32 relative overflow-hidden bg-gray-50">
		<div className="w-11/12 mx-auto">
		<div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#025067]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#025067]/5 rounded-full blur-3xl"></div>
        
        {/* Animated circles */}
        <div className="absolute top-1/4 right-1/4 w-6 h-6 rounded-full bg-[#025067]/20 animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-4 h-4 rounded-full bg-[#025067]/30 animate-ping" style={{ animationDuration: '3s' }}></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
          {/* Left column - Title and description */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="inline-block">
              {/* <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-1 bg-gradient-to-r from-[#025067] to-[#16a3cc] mb-2"
              ></motion.div> */}
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#025067] to-[#16a3cc]">
                Frequently Asked Questions
              </h2>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              The Global Future Summit is a premier event that brings together visionaries, innovators, and leaders from various industries to discuss emerging trends, technological advancements, and sustainable solutions for the future.
            </p>
			<div className="w-[400px] opacity-15"><img src="https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumCaqoLxQi6EeD1wHIp3zVSgTXJyWtuZ2hdcix" alt="" /></div>
			
            
            {/* <div className="p-6 bg-white rounded-lg border border-[#025067]/20 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20">
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#025067] transform rotate-45 translate-x-10 -translate-y-10"></div>
              </div>
              <div className="relative">
                <Brain className="w-10 h-10 text-[#025067] mb-4" />
                <h3 className="text-xl font-semibold text-[#025067] mb-2">Knowledge Sharing Platform</h3>
                <p className="text-gray-600">
                 The Global Future Summit is a premier event that brings together visionaries, innovators, and leaders from various industries to discuss emerging trends, technological advancements, and sustainable solutions for the future.
                </p>
              </div>
            </div> */}
            
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-[#025067] to-[#16a3cc] text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Register Now
            </motion.button> */}
          </motion.div>
          
          {/* Right column - FAQ items */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-2"
          >
            {faqList.map((faq) => (
              <FaqItem 
                key={faq.id} 
                faq={faq} 
                isOpen={openId === faq.id}
                toggleFaq={toggleFaq}
              />
            ))}
          </motion.div>
        </div>
      </div>
		</div>
      {/* Background decorative elements */}
      
    </section>
  );
};

export default FAQ;