import React from "react";
import { Hero } from "./Hero";
import { ProjectSection } from "./ProjectSection";
import { Connect } from "./Connect";
import Footer from "./Footer";

const Main = () => {
  return (
    <main className="h-0 rounded-2xl bg-[#20242f] shadow-2xl shadow-gray-900 md:container md:mx-auto md:h-screen">
      <Hero />
      <ProjectSection />
      <Connect />
      <Footer />
    </main>
  );
};

export default Main;
