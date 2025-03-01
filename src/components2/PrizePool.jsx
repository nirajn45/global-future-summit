import { motion } from "framer-motion";
import { Trophy, Shirt, Gift, ScrollText } from "lucide-react";

// Prize items
const goodies = [
  { icon: <Trophy size={40} className="text-yellow-500" />, title: "Champion Trophy", desc: "For the top-performing team!" },
  { icon: <Shirt size={40} className="text-blue-500" />, title: "Exclusive Swags", desc: "T-shirts, stickers & more!" },
  { icon: <Gift size={40} className="text-red-500" />, title: "Merch Bundle", desc: "Bags, bottles & cool stuff!" },
  { icon: <ScrollText size={40} className="text-green-500" />, title: "Certificates", desc: "Proof of your achievement!" },
];

const PrizePool = () => {
  // Placeholder function for confetti effect
  const handleConfetti = () => {
    // Add your confetti logic here
    console.log("Confetti effect triggered!");
  };

  return (
    <div
      className="min-h-screen w-full font-[Poppins] flex flex-col items-center justify-center px-6 py-12 relative bg-white"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: "20px 20px",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Title Section */}
      <h2 className="text-4xl md:text-6xl font-extrabold text-[#4285F4] mb-4 text-center">
        🏆 Prize Pool
      </h2>
      <p className="text-lg md:text-2xl text-black font-medium mb-8 text-center max-w-2xl">
        "Pitch your <span className="text-blue-500 font-semibold">idea</span>, present your <span className="text-red-500 font-semibold">innovation</span>, and unlock exciting surprises!"
      </p>

      {/* Prize Box - Responsive */}
      <motion.div
        // whileHover={{ scale: 1.02 }}
        className="relative flex flex-col items-center w-full max-w-5xl h-auto md:h-[350px] bg-white rounded-3xl shadow-2xl border border-gray-300 p-6 md:p-10 overflow-hidden z-20"
      >
        {/* TBA Blur Overlay */}
        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm flex items-center justify-center z-30">
          <h3 className="text-4xl md:text-6xl font-bold text-[#8A9BAF] text-center">TO BE ANNOUNCED</h3>
        </div>

        {/* Prize Cards - Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 z-10 w-full">
          {goodies.map((goodie, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, rotate: 2 }}
              transition={{ type: "spring", stiffness: 150, damping: 10 }}
              onHoverStart={handleConfetti} // Triggers confetti on hover
              className="flex flex-col items-center justify-center w-full h-[180px] md:h-[200px] bg-gray-100 rounded-xl shadow-lg border border-gray-400 transition-all hover:shadow-2xl hover:border-gray-500 cursor-pointer p-4"
              role="button"
              aria-label={`Prize: ${goodie.title}`}
            >
              {goodie.icon}
              <h3 className="text-sm md:text-lg font-semibold text-gray-800 mt-2">{goodie.title}</h3>
              <p className="text-xs md:text-sm text-gray-600 text-center">{goodie.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default PrizePool;