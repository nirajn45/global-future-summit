import { motion } from "framer-motion";
import "./timeline.css";

// Define timeline events
const timelineEvents = [
  { time: "9 AM", title: "Orientation", description: "Welcome session with HR, paperwork, and company policies.", icon: "🏢" },
  { time: "10 AM", title: "HR Panel", description: "Introduction to team members and workspace.", icon: "🎓" },
  { time: "11 AM", title: "Industry Panel", description: "Discuss role, responsibilities, and expectations.", icon: "👨‍💼" },
  { time: "12 PM", title: "Lunch", description: "Enjoy a welcome lunch with your team.", icon: "🍔" },
  { time: "1 PM", title: "Presentation", description: "Observe and learn from an experienced team member.", icon: "🔍" },
  { time: "3 PM", title: "Award", description: "Discuss your first impressions and set goals.", icon: "📋" },
  { time: "5 PM", title: "Vote of Thanks", description: "Wrap up and reflect on your first day.", icon: "🌿" },
];

// Timeline item component
const TimelineItem = ({ time, title, description, icon }) => {
  return (
    <motion.div
      className="timeline-item relative p-4 mb-4 bg-white rounded-lg shadow-md"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Icon placed in the corner */}
      <div className="absolute top-4 right-4 text-2xl">{icon}</div>

      {/* Timeline content */}
      <div className="timeline-content">
        <h3 className="time font-semibold text-lg">{time}</h3>
        <h4 className="title font-bold text-xl mb-2">{title}</h4>
        <p className="description text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

// Main App component
function App() {
  return (
    <div className="timeline-container relative">
      {/* Earth Background */}
      <div
        className="earth-background absolute inset-0 bg-no-repeat bg-center bg-cover opacity-10"
        style={{
          backgroundImage: 'url("https://png.pngtree.com/png-vector/20230904/ourmid/pngtree-white-globe-png-image_9977343.png")',
        }}
      ></div>

      <h1 className="timeline-title font-bold text-3xl text-center relative z-10">Event Timeline</h1>

      <div className="timeline relative z-10">
        {timelineEvents.map((event, index) => (
          <TimelineItem key={index} {...event} />
        ))}
      </div>
    </div>
  );
}

export default App;