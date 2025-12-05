import React from "react";
import { Projects } from "./Projects";

export const ProjectSection = () => {
  return (
    <div className="pb-10">
      <div className="text-center mb-15">
        <h1 className="mt-10 inline-block border-b-2 text-3xl text-[#00BCD4] font-medium border-[#00BCD4]">Latest Works</h1>
      </div>
      <Projects />
    </div>
  );
};
