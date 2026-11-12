import React from "react";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
};

const Section = ({ id, eyebrow, title, children }: SectionProps) => (
  <section id={id} className="border-t border-zinc-200 py-16 sm:py-20 dark:border-zinc-800">
    <div className="container-page grid gap-8 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-12">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      </div>
      <div className="min-w-0">{children}</div>
    </div>
  </section>
);

export default Section;
