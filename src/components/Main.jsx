import React, { lazy } from "react";
import { Hero } from "./Hero";
import { ProjectSection } from "./ProjectSection";
import { Connect } from "./Connect";
import FooterSection from "./FooterSection";

const Main = () => {
    lazy(() => import("./About"));
  return (
    <main>
      <Hero />
      <ProjectSection />
      <Connect />
      <FooterSection />
    </main>
  );
};

export default Main;
