import React, { lazy } from "react";
import { HeroEffect } from "./HeroEffect";
import { HeroSidebar } from "./HeroSidebar";

export const Hero = () => {
  lazy(() => import("./About"));
  return (
    <div className="flex h-auto items-center justify-around md:h-screen">
      <HeroEffect />
      <HeroSidebar />
    </div>
  );
};
