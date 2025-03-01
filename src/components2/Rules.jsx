import React from 'react';
import { FaGoogle, FaLightbulb, FaUsers, FaGavel, FaClipboardList, FaGlobe, FaBalanceScale, FaProjectDiagram } from 'react-icons/fa';

const DualVerticalTimeline = () => {
  const googleColors = [
    'bg-blue-500',
    'bg-red-500',
    'bg-yellow-400',
    'bg-green-500',
    'bg-blue-500',
    'bg-red-500',
    'bg-green-500',
    'bg-blue-500'
  ];
  
  const textColors = [
    'text-blue-500',
    'text-red-500',
    'text-yellow-400',
    'text-green-500',
    'text-blue-500',
    'text-red-500',
    'text-green-500',
    'text-blue-500'
  ];
  
  const timelineItemsLeft = [
    { title: 'Originality', description: 'The idea must be original and not previously implemented or copied.' },
    { title: 'Alignment with SDGs', description: 'Each project must align with at least one of the 17 UN Sustainable Development Goals.' },
    { title: 'Google Solution Challenge Guidelines', description: 'The ideathon follows the official Google Solution Challenge 2025 framework.' },
    { title: 'Presentation Format', description: 'Submitted PPTs must be in the standard format (Max 10 slides, including problem statement, solution, implementation plan, and expected impact).' }
  ];
  
  const timelineItemsRight = [
    { title: 'Decision Authority', description: 'Judges decisions at every stage will be final and binding.' },
    { title: 'Team Composition', description: 'A team can have 2 to 4 members. Cross-departmental collaborations are highly encouraged.' },
    { title: 'Intellectual Property', description: 'Participants retain ownership of their ideas, but The Uniques Community reserves the right to feature selected projects in promotional materials.' }
  ];
  
  // Icons with assigned colors
  const iconTypes = [
    { Icon: FaGoogle, color: 'text-blue-500' },
    { Icon: FaLightbulb, color: 'text-yellow-400' },
    { Icon: FaUsers, color: 'text-green-500' },
    { Icon: FaGavel, color: 'text-red-500' },
    { Icon: FaClipboardList, color: 'text-blue-500' },
    { Icon: FaGlobe, color: 'text-yellow-400' },
    { Icon: FaBalanceScale, color: 'text-green-500' },
    { Icon: FaProjectDiagram, color: 'text-red-500' }
  ];
  
  // Generate Background Icons
  const createSpacedIcons = () => {
    const icons = [];
    const positions = [
      { top: '20%', left: '20%' },
      { top: '20%', left: '80%' },
      { top: '80%', left: '20%' },
      { top: '80%', left: '80%' }
    ];
    
    positions.forEach((position, index) => {
      const iconIndex = index % iconTypes.length;
      const { Icon, color } = iconTypes[iconIndex];

      icons.push({
        Icon,
        color,
        style: {
          top: position.top,
          left: position.left,
          fontSize: `${Math.random() * 4 + 8}rem`,
          transform: `rotate(${Math.random() * 360}deg)`,
          position: 'absolute',
          opacity: 0.1
        }
      });
    });

    return icons;
  };

  const backgroundIcons = createSpacedIcons();

  const TimelineColumn = ({ items, startIndex, isLeft }) => (
    <div className="relative w-full sm:w-10/12 md:w-5/12 mx-auto">
      <div className={`absolute ${isLeft ? 'right-4 sm:right-6 md:right-8' : 'left-4 sm:left-6 md:left-8'} top-0 bottom-0 w-1 bg-gray-300`}></div>
      <div className="space-y-16">
        {items.map((item, index) => {
          const colorIndex = startIndex + index;
          return (
            <div key={item.title} className="relative flex items-start">
              <div
                className={`absolute ${isLeft ? 'right-4 sm:right-6 md:right-8' : 'left-4 sm:left-6 md:left-8'} w-6 h-6 rounded-full transform ${isLeft ? 'translate-x-1/2' : '-translate-x-1/2'} ${googleColors[colorIndex]} border-2 border-white shadow-md z-10`}
              ></div>
              <div className={`${isLeft ? 'mr-6 sm:mr-10 md:mr-16 pl-4 text-right' : 'ml-6 sm:ml-10 md:ml-16 pr-4 text-left'}`}>
                <div className="bg-white p-4 rounded-lg shadow-sm h-auto flex flex-col justify-between border border-gray-300 relative">
                  <span className={`absolute top-1/2 transform -translate-y-1/2 text-7xl font-bold opacity-20 ${isLeft ? 'left-4' : 'right-4'} text-gray-300`}>
                    {String(colorIndex).padStart(2, '0')}
                  </span>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-sm sm:text-base">{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="relative min-h-screen max-w-7xl mx-auto flex flex-col font-[Poppins] justify-center items-center px-4 py-12 pb-24 overflow-hidden">
      
      {/* Background Icons */}
      <div className="absolute inset-0 overflow-hidden">
        {backgroundIcons.map((icon, index) => {
          const { Icon, color, style } = icon;
          return <Icon key={index} className={`${color}`} style={style} />;
        })}
      </div>

      {/* Title */}
      <div className="w-full max-w-6xl mx-auto relative z-10 mb-14">
        <h1 className="text-2xl sm:text-5xl font-bold mb-24 text-center text-black-500">
          Rules & Regulations
        </h1>

        {/* Timeline */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 w-full">
          <TimelineColumn items={timelineItemsLeft} startIndex={1} isLeft={true} />
          <TimelineColumn items={timelineItemsRight} startIndex={5} isLeft={false} />
        </div>
      </div>
    </div>
  );
};

export default DualVerticalTimeline;