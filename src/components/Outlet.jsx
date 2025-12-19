import React, { lazy, useState } from "react";
import { Hero } from "./Hero";
import { ProjectSection } from "./ProjectSection";
import { Connect } from "./Connect";
import FooterSection from "./FooterSection";

const Outlet = () => {
  lazy(() => import("./About"));
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDarkMode")),
  );
  return (
    <main
      className={`${isDark ? "bg-[#191d26] text-white" : "bg-white text-[#1e293b]"}`}
    >
      <Hero isDark={isDark} setIsDark={setIsDark} />
      <ProjectSection isDark={isDark} />
      <Connect isDark={isDark} />
      <FooterSection />
    </main>
  );
};

export default Outlet;
