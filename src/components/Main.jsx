import React from "react";
import { Hero } from "./Hero";
import { ProjectSection } from "./ProjectSection";

const Main = () => {
  return (
    <main className="h-0 rounded-2xl bg-[#20242f] shadow-2xl shadow-gray-900 md:container md:mx-auto md:h-screen">
      <Hero />
      <ProjectSection />
    </main>
  );
};

export default Main;
