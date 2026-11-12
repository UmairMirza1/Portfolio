"use client";

import React from "react";
import { Tabs } from "@/components/ui/tabs";
import { aboutText, experience, featuredWork, otherProjects } from "@/data/contentConfig";

const panel = "w-full rounded-2xl px-1 md:px-6 text-gray-300";

const Chip = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block bg-gray-800 text-gray-100 px-3 py-1 rounded-full text-xs md:text-sm">
    {children}
  </span>
);

export function TabsData() {
  const tabs = [
    {
      title: "About",
      value: "about",
      content: (
        <div className={`${panel} text-base md:text-lg`}>
          {aboutText.map((paragraph, index) => (
            <p key={index} className="leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      ),
    },
    {
      title: "Experience",
      value: "experience",
      content: (
        <div className={panel}>
          <div className="space-y-10">
            {experience.map((employer) => (
              <div key={employer.company}>
                <h3 className="text-2xl font-bold text-white">{employer.company}</h3>
                <p className="text-sm text-gray-400">
                  {employer.detail} · {employer.location}
                </p>
                <div className="mt-4 space-y-6 border-l border-gray-700 pl-4 md:pl-6">
                  {employer.roles.map((role) => (
                    <div key={role.title + role.dates}>
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                        <h4 className="text-lg font-semibold text-white">{role.title}</h4>
                        <span className="text-sm text-gray-400">{role.dates}</span>
                      </div>
                      <ul className="mt-2 space-y-2 list-disc pl-5 marker:text-gray-500">
                        {role.bullets.map((bullet) => (
                          <li key={bullet} className="leading-relaxed">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Projects",
      value: "projects",
      content: (
        <div className={panel}>
          <div className="space-y-6">
            {featuredWork.map((work) => (
              <article
                key={work.title}
                className="p-5 rounded-lg border border-gray-700 hover:border-[#2eb0cb] transition-colors duration-300"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl md:text-2xl font-bold text-white">{work.title}</h3>
                  {work.status && (
                    <span className="text-xs uppercase tracking-wide rounded-full border border-amber-400/60 text-amber-300 px-2 py-0.5">
                      {work.status}
                    </span>
                  )}
                </div>
                <dl className="mt-3 space-y-2 leading-relaxed">
                  <div>
                    <dt className="inline font-semibold text-gray-100">Problem: </dt>
                    <dd className="inline">{work.problem}</dd>
                  </div>
                  <div>
                    <dt className="inline font-semibold text-gray-100">What I built: </dt>
                    <dd className="inline">{work.built}</dd>
                  </div>
                  <div>
                    <dt className="inline font-semibold text-gray-100">Result: </dt>
                    <dd className="inline text-[#5fd0e6]">{work.result}</dd>
                  </div>
                </dl>
                {work.image && (
                  <a href={work.image.src} target="_blank" rel="noopener noreferrer" className="block mt-4">
                    <img
                      src={work.image.src}
                      alt={work.image.alt}
                      loading="lazy"
                      className="w-full max-w-xl mx-auto rounded-lg"
                    />
                  </a>
                )}
                <div className="mt-4 flex flex-wrap gap-2">
                  {work.stack.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>
              </article>
            ))}

            <div className="pt-4">
              <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-3">Also</h3>
              {otherProjects.map((p) => (
                <div key={p.title} className="mb-3">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-white hover:text-[#2eb0cb]"
                  >
                    {p.title} ↗
                  </a>
                  <p className="text-gray-400">
                    {p.description} <span className="text-gray-500">({p.stack.join(", ")})</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative flex flex-col w-full items-start justify-start">
      <Tabs tabs={tabs} />
    </div>
  );
}
