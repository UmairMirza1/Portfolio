import React from "react";

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-5">
    <h2 className="text-2xl font-light text-white tracking-wide mb-2">{children}</h2>
    <div className="h-0.5 bg-gradient-to-r from-blue-400 to-purple-400" />
  </div>
);

export default SectionHeading;
