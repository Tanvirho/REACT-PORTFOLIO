import React from "react";
import image from "../assets/Hero-photo.png";
import { skills } from "../assets/ProjectData";

const About = () => {
  return (
    <>
      <div className="fixed inset-0 z-40 bg-white opacity-30"></div>
      <div className="fixed inset-15 z-50 flex flex-wrap items-center justify-center rounded-3xl border-2 border-[#8E2DE2] bg-[#191d26] p-10">
        <div className="flex md:w-[40%] flex-col items-center md:border-r border-r-gray-600">
          <div className="h-40 w-40 overflow-hidden rounded-full">
            <img src={image} alt="Hero.png" />
          </div>
          <h1 className="mt-8 text-3xl font-medium">TANVIR HOSSAIN</h1>
          <h2 className="text-[20px] text-[#00BCD4]">Frontend Developer</h2>
        </div>
        <div className="mt-12 md:w-[60%] md:pl-10">
          <h1 className="mb-6 text-2xl font-medium text-[#00BCD4]">About Me</h1>
          <p>
            I am a passionate Frontend Developer proficient in JavaScript, HTML,
            CSS, and modern frameworks, including React.js, Tailwind, and
            Bootstrap.
          </p>
          <p className="mt-3">
            I specialize in building beautiful, highly responsive, and
            user-friendly web experiences, driven by a commitment to translating
            creative designs into pixel-perfect, high-performance code.
          </p>
          <div className="flex flex-wrap space-x-3">
            {skills.map((framework, i) => (
              <span
                className="mt-3 rounded-full border border-gray-700 px-3 py-1 text-sm shadow-sm"
                key={i}
              >
                #{framework}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
