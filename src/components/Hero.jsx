import React from "react";
import { HeroEffect } from "./HeroEffect";
import { HeroSidebar } from "./HeroSidebar";

export const Hero = () => {
  return (
    <div className="flex h-auto items-center justify-around md:h-screen">
      <HeroEffect />
      <HeroSidebar />
    </div>
  );
};
