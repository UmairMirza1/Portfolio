import React from "react";
import { education } from "@/data/contentConfig";
import SectionHeading from "./SectionHeading";

const Education = () => {
  return (
    <section id="education" className="rounded-xl p-4 md:p-6">
      <SectionHeading>Education</SectionHeading>
      <div className="space-y-6">
        {education.map((edu) => (
          <div key={edu.degree}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="text-lg font-medium text-white">{edu.degree}</h3>
              <span className="text-sm text-gray-400">{edu.year}</span>
            </div>
            <p className="text-gray-400">{edu.school}</p>
            <ul className="mt-2 space-y-1 text-gray-300">
              {edu.achievements.map((a) => (
                <li key={a}>• {a}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
