import { FaCheckCircle, FaFileAlt, FaPen } from "react-icons/fa";

const Timeline = () => {
  return (
    <div className="flex justify-start items-start min-h-screen bg-white p-6 w-full">
      <div className="w-full p-6">
        <h2 className="text-2xl font-semibold mb-4">Event Timeline</h2>

        {/* Timeline Container */}
        <div className="relative border-l-4 border-gray-300 pl-6 space-y-6">
          {/* Event 1 */}
          <div className="relative">
            <FaCheckCircle className="text-gray-500 absolute -left-7 top-1 text-2xl" />
            <p className="text-gray-500 text-sm">8th Feb, 10:00 a.m.</p>
            <p className="font-semibold">Event Starts</p>
          </div>

          {/* Event 2 */}
          <div className="relative">
            <FaCheckCircle className="text-gray-500 absolute -left-7 top-1 text-2xl" />
            <p className="text-gray-500 text-sm">11:00 a.m.</p>
            <p className="font-semibold">Panel Discussion</p>
            {/* <a href="#" className="text-blue-500 text-sm">View proposal</a> */}
          </div>

          {/* Event 3 */}
          <div className="relative">
            <FaFileAlt className="text-gray-500 absolute -left-7 top-1 text-2xl" />
            {/* <p className="font-semibold">Manage Documents</p> */}
            {/* <a href="#" className="text-blue-500 text-sm">View & Send Documents</a> */}
            <p className="text-gray-500 text-sm">2:00 p.m.</p>
            <p className="font-semibold">HR Discussion</p>
          </div>

          {/* Event 4 */}
          <div className="relative">
            <FaPen className="text-gray-500 absolute -left-7 top-1 text-2xl" />
            <p className="font-semibold">Presentation Round</p>
            {/* <a href="#" className="text-blue-500 text-sm">See Contract Template</a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;