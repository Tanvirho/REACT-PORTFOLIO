import React, { lazy } from "react";
import { HeroEffect } from "./HeroEffect";
import { HeroSidebar } from "./HeroSidebar";

export const Hero = () => {
  const About = lazy(()=>import('./About'))
  return (
    <div className="flex h-auto items-center justify-around md:min-h-[768px] md:max-h-[800px]">
      <HeroEffect />
      <HeroSidebar />
    </div>
  );
};
