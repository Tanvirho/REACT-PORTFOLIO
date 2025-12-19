import React, { useEffect, useState } from "react";
import image from "../assets/Hero-photo.png";
import { skills } from "../assets/ProjectData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNodeJs,
  faReact,
  faSquareJs,
} from "@fortawesome/free-brands-svg-icons";
import { createPortal } from "react-dom";

const About = ({ isOpen, setIsOpen, isDark }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible) return null;

  return createPortal(
    <>
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ease-in-out ${
          isDark ? "bg-black opacity-50" : "bg-gray-900 opacity-30"
        } ${isOpen ? "opacity-50" : "opacity-0"}`}
        onClick={() => setIsOpen(false)}
      ></div>

      <div
        className={`fixed inset-2 z-50 flex h-auto transform flex-wrap items-center justify-center rounded-3xl border-2 border-[#8E2DE2] p-5 transition-all duration-300 ease-in-out md:inset-10 md:p-10 ${
          isDark ? "bg-[#191d26] text-white" : "bg-white text-gray-900"
        } ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
      >
        <button
          type="button"
          className="absolute top-6 right-6 cursor-pointer rounded-full border border-[#8E2DE2] bg-gray-800 p-2 text-[#8E2DE2] shadow-sm backdrop-blur-md transition-all duration-300 hover:rotate-90 hover:bg-white/20"
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
          <div
            className={`flex flex-col items-center md:w-[40%] md:border-r ${isDark ? "border-gray-600" : "border-gray-300"}`}
          >
            <div className="h-20 w-20 overflow-hidden rounded-full border-2 border-[#00BCD4] md:h-40 md:w-40">
              <img
                src={image}
                alt="Tanvir Hossain"
                className="h-full w-full object-cover"
              />
            </div>
            <h1 className="mt-5 text-2xl font-medium md:mt-8 md:text-3xl">
              TANVIR HOSSAIN
            </h1>
            <h2 className="text-[16px] text-[#00BCD4] md:text-[20px]">
              Frontend Developer
            </h2>
            <ul className="mt-4 flex flex-wrap justify-center space-x-3 text-3xl md:mt-8 md:space-x-5 md:text-5xl">
              <li className="group relative cursor-pointer">
                <span className="absolute bottom-full left-1/2 mb-2 hidden -translate-x-1/2 rounded-xl bg-amber-300 px-3 py-1 text-[12px] font-bold text-gray-900 group-hover:block">
                  JavaScript
                </span>
                <FontAwesomeIcon className="text-amber-300" icon={faSquareJs} />
              </li>
              <li className="group relative cursor-pointer">
                <span className="absolute bottom-full left-1/2 mb-2 hidden -translate-x-1/2 rounded-xl bg-[#00d8f1] px-3 py-1 text-[12px] font-bold text-gray-900 group-hover:block">
                  React.JS
                </span>
                <FontAwesomeIcon className="text-[#00d8f1]" icon={faReact} />
              </li>
              <li className="group relative cursor-pointer">
                <span className="absolute bottom-full left-1/2 mb-2 hidden -translate-x-1/2 rounded-xl bg-lime-500 px-3 py-1 text-[12px] font-bold text-gray-900 group-hover:block">
                  Node.JS
                </span>
                <FontAwesomeIcon className="text-lime-500" icon={faNodeJs} />
              </li>
              <li className="group relative cursor-pointer">
                <span className="absolute bottom-full left-1/2 mb-2 hidden -translate-x-1/2 rounded-xl bg-[#00d8f1] px-3 py-1 text-[12px] font-bold text-gray-900 group-hover:block">
                  Tailwind
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 48 48"
                  className="h-10 w-10 md:h-12 md:w-12"
                >
                  <path
                    fill="#00acc1"
                    d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"
                  ></path>
                </svg>
              </li>
            </ul>
          </div>

          <div className="mt-2 md:mt-0 md:w-[60%] md:pl-10">
            <h1 className="mb-1 text-[18px] font-medium text-[#00BCD4] md:mb-6 md:text-2xl">
              About Me
            </h1>
            <p className="text-[14px] leading-relaxed md:text-[16px]">
              I help business owners and busy developers design and develop
              creative websites that align with their vision and engage
              visitors. These are the technologies and tools I use to create
              these high-impact websites:
            </p>

            <div className="mt-4 flex flex-wrap gap-2 md:mt-6">
              {skills.map((framework, i) => (
                <span
                  key={i}
                  className={`rounded-full border px-3 py-1 text-[11px] shadow-sm transition-all md:text-sm ${
                    isDark
                      ? "border-gray-700 bg-gray-800/50 text-gray-300"
                      : "border-gray-300 bg-gray-50 text-gray-600"
                  }`}
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
