"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode | any;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  tabClassName,
  activeTabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  tabClassName?: string;
  activeTabClassName?: string;
  contentClassName?: string;
}) => {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState<Tab>(propTabs[0]);

  const scrollToRef = (ref: HTMLDivElement | null) => {
    if (ref) {
      ref.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleTabClick = (tab: Tab, idx: number) => {
    setActive(tab);
    scrollToRef(refs.current[idx]);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const tab = propTabs.find((t) => t.value === entry.target.id);
            if (tab) {
              setActive(tab);
            }
          }
        });
      },
      // Mark a section active when it crosses a band near the top of the viewport,
      // so long sections (taller than the screen) still activate their tab.
      { root: null, rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    );

    refs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      if (refs.current) {
        refs.current.forEach((ref) => {
          if (ref) {
            observer.unobserve(ref);
          }
        });
      }
    };
  }, [refs, propTabs]);

  return (
    <>
      <div
        className={cn(
          "sticky top-0 z-20 bg-[#0b0f27]/90 backdrop-blur py-2 flex justify-start [perspective:1000px] overflow-x-auto sm:overflow-visible hide-scrollbar max-w-full w-full mb-4",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => handleTabClick(tab, idx)}
            className={cn(
              "relative px-4 py-2 rounded-full",
              tabClassName,
              active.value === tab.value && "text-white"
            )}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 bg-[#0070f3] rounded-full",
                  activeTabClassName
                )}
              />
            )}

            <span className="relative block text-lg text-white">
              {tab.title}
            </span>
          </button>
        ))}
      </div>
      <div className={cn("w-full h-full", contentClassName)}>
        {propTabs.map((tab, idx) => (
          <div
            key={tab.value}
            id={tab.value}
            ref={(el) => {
              refs.current[idx] = el;
            }}
            className="w-full py-8 scroll-mt-16"
          >
            {tab.content}
          </div>
        ))}
      </div>
    </>
  );
};
