import React from "react";
import image from "../assets/Hero-photo.png";
import { skills } from "../assets/ProjectData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNodeJs,
  faReact,
  faSquareJs,
} from "@fortawesome/free-brands-svg-icons";
import { createPortal } from "react-dom";

const About = ({ isOpen, setIsOpen }) => {
  if (!isOpen) return null;

  return createPortal(
    <>
      <div className="fixed inset-0 z-40 bg-white opacity-30"></div>
      <div className="fixed inset-10 z-50 flex flex-wrap items-center justify-center rounded-3xl border-2 border-[#8E2DE2] bg-[#191d26] p-10">
        <button
          type="button"
          className="absolute top-6 right-6 cursor-pointer rounded-full border border-[#8E2DE2] bg-gray-800 p-2 text-[#8E2DE2] shadow-sm backdrop-blur-md transition-all duration-300 hover:rotate-90 hover:bg-white/50"
          aria-label="Close"
          onClick={() => setIsOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="relative flex flex-wrap items-center justify-center">
          <div className="flex flex-col items-center border-r-gray-600 md:w-[40%] md:border-r">
            <div className="h-40 w-40 overflow-hidden rounded-full">
              <img src={image} alt="Hero.png" />
            </div>
            <h1 className="mt-8 text-3xl font-medium">TANVIR HOSSAIN</h1>
            <h2 className="text-[20px] text-[#00BCD4]">Frontend Developer</h2>
            <ul className="mt-8 flex flex-wrap space-x-5 text-5xl">
              <li className="group relative cursor-pointer">
                <span className='absolute top-15 left-1/2 hidden -translate-x-1/2 rounded-2xl bg-amber-300 p-4 text-[14px] font-medium transition-all duration-300 ease-in-out group-hover:-top-18 group-hover:block after:absolute after:-bottom-2 after:left-1/2 after:h-5 after:w-5 after:-translate-x-1/2 after:rotate-45 after:bg-amber-300 after:content-[""]'>
                  JavaScript
                </span>
                <FontAwesomeIcon
                  className="relative text-amber-300"
                  icon={faSquareJs}
                />
              </li>
              <li className="group relative cursor-pointer">
                <span className='absolute top-15 left-1/2 hidden -translate-x-1/2 rounded-2xl bg-[#00d8f1] p-4 text-[14px] font-medium transition-all duration-300 ease-in-out group-hover:-top-18 group-hover:block after:absolute after:-bottom-2 after:left-1/2 after:h-5 after:w-5 after:-translate-x-1/2 after:rotate-45 after:bg-[#00d8f1] after:content-[""]'>
                  React.JS
                </span>
                <FontAwesomeIcon className="text-[#00d8f1]" icon={faReact} />
              </li>
              <li className="group relative cursor-pointer">
                <span className='absolute top-15 left-1/2 hidden -translate-x-1/2 rounded-2xl bg-lime-500 p-4 text-[14px] font-medium transition-all duration-300 ease-in-out group-hover:-top-18 group-hover:block after:absolute after:-bottom-2 after:left-1/2 after:h-5 after:w-5 after:-translate-x-1/2 after:rotate-45 after:bg-lime-500 after:content-[""]'>
                  Node.JS
                </span>
                <FontAwesomeIcon className="text-lime-500" icon={faNodeJs} />
              </li>
              <li className="group relative cursor-pointer">
                <span className='absolute top-15 left-1/2 hidden -translate-x-1/2 rounded-2xl bg-[#00d8f1] p-4 text-[14px] font-medium transition-all duration-300 ease-in-out group-hover:-top-18 group-hover:block after:absolute after:-bottom-2 after:left-1/2 after:h-5 after:w-5 after:-translate-x-1/2 after:rotate-45 after:bg-[#00d8f1] after:content-[""]'>
                  Tailwind
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="50"
                  height="50"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#00acc1"
                    d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"
                  ></path>
                </svg>
              </li>
            </ul>
          </div>
          <div className="mt-12 md:mt-0 md:w-[60%] md:pl-10">
            <h1 className="mb-6 text-2xl font-medium text-[#00BCD4]">
              About Me
            </h1>
            <p>
              I am a passionate Frontend Developer proficient in JavaScript,
              HTML, CSS, and modern frameworks, including React.js, Tailwind,
              and Bootstrap.
            </p>
            <p className="mt-3">
              I specialize in building beautiful, highly responsive, and
              user-friendly web experiences, driven by a commitment to
              translating creative designs into pixel-perfect, high-performance
              code.
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
      </div>
    </>,
    document.getElementById("portal"),
  );
};

export default About;
