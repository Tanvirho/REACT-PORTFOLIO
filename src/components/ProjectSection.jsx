import React from "react";
import { Projects } from "./Projects";

export const ProjectSection = ({ isDark }) => {
  return (
    <div className="relative mt-25 overflow-hidden pb-20">
      <div className="absolute top-0 bottom-0 left-1/2 hidden w-0.5 -translate-x-0.5 bg-[#00BCD4] md:block"></div>
      <div className="mb-15 text-center">
        <h1
          className={`relative inline-block border-b-2 border-[#00BCD4] ${isDark ? "bg-[#191d26]" : "bg-white"} text-3xl font-medium text-[#00BCD4] md:text-4xl`}
        >
          Latest Works
        </h1>
      </div>
      <Projects isDark={isDark} />
    </div>
  );
};
