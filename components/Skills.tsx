import React from "react";
import { skillGroups } from "@/data/contentConfig";
import SectionHeading from "./SectionHeading";

const Skills = () => {
  return (
    <section id="skills" className="rounded-xl p-4 md:p-6">
      <SectionHeading>Skills</SectionHeading>
      <div className="space-y-5">
        {skillGroups.map((group) => (
          <div key={group.name}>
            <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-2">{group.name}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-slate-700 bg-[#0b1020] px-3 py-1.5 text-sm text-slate-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
