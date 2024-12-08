import React from 'react';
import { education } from '@/data/contentConfig';

const Education = () => {

  return (
    <div className="p-6 rounded-xl transition-all duration-300 hover:bg-[#122B39]/40">
      {/* Header Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-light text-white mb-3 tracking-wide">
          Education
        </h2>
        <div className="relative h-0.5">
          <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-r from-blue-500/50 to-purple-500/50 blur-sm" />
          <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-r from-blue-400 to-purple-400" />
        </div>
      </div>

      {/* Education Items */}
      <div className="space-y-8">
        {education.map((edu, index) => (
          <div 
            key={index}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start group"
          >
            {/* Left Column - Degree & School */}
            <div className="md:col-span-5 space-y-2">
              <h3 className="text-xl font-medium text-white group-hover:text-[#2eb0cb] transition-colors duration-300">
                {edu.degree}
              </h3>
              <p className="text-gray-400 font-light text-lg">
                {edu.school}
              </p>
            </div>

            {/* Middle Column - Location & GPA */}
            <div className="md:col-span-3 space-y-2">
              <p className="text-gray-300 font-light">
                {edu.location}
              </p>
              <p className="text-[#2eb0cb] font-medium">
                GPA: {edu.GPA}
              </p>
            </div>

            {/* Right Column - Achievements */}
            <div className="md:col-span-4">
              {edu.achievements.split('\n').map((achievement, i) => (
                <p 
                  key={i} 
                  className="text-gray-300 font-light mb-2 leading-relaxed"
                >
                  • {achievement}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
