import React from "react";
import { Projects } from "./Projects";

export const ProjectSection = () => {
  return (
    <div className="relative mt-25 overflow-hidden pb-10">
      <div className="absolute top-0 bottom-0 left-1/2 hidden w-0.5 -translate-x-0.5 bg-[#00BCD4] md:block"></div>
      <div className="mb-15 text-center">
        <h1 className="relative inline-block border-b-2 border-[#00BCD4] bg-[#191d26] text-2xl md:text-4xl font-medium text-[#00BCD4]">
          Latest Works
        </h1>
      </div>
      <Projects />
    </div>
  );
};
