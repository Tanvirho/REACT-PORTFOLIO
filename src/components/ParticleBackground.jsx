import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useState } from "react";
import React from "react";

const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      // 🔒 KEEPS IT INSIDE THE CONTAINER
      fullScreen: {
        enable: false,
        zIndex: 0,
      },
      background: {
        color: { value: "transparent" },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
          onClick: { enable: true, mode: "push" },
        },
        modes: {
          grab: {
            distance: 200,
            links: { opacity: 1 },
          },
          push: { quantity: 4 },
        },
      },
      particles: {
        // 🚀 UPDATE 1: More Particles (Increased from 60 to 100)
        number: {
          value: 130,
          density: { enable: true, value_area: 800 },
        },
        color: {
          value: ["#00BCD4", "#8E2DE2"],
        },
        shape: { type: "circle" },
        opacity: {
          value: { min: 0.3, max: 0.8 },
          animation: {
            enable: true,
            speed: 1, // Faster twinkling
            sync: false,
          },
        },
        size: {
          value: { min: 1, max: 4 },
        },
        links: {
          enable: true,
          distance: 120,
          color: "#ffffff",
          opacity: 0.26,
          width: 1,
        },
        move: {
          enable: true,
          // 🚀 UPDATE 2: Faster Movement (Increased from 0.8 to 2.0)
          speed: 2,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
        },
      },
    }),
    [],
  );

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="absolute top-0 left-0 h-full w-full"
    />
  );
};

export default ParticleBackground;
