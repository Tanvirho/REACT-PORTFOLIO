import React from "react";
import heroImage from "../assets/Hero.png";
import { Navbar } from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faLinkedinIn,
  faTelegramPlane,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import ParticleBackground from "./ParticleBackground";
import About from "./About";

export const HeroEffect = () => {
  return (
    <>
      <div
        className="heroImage relative h-[85%] w-full overflow-hidden bg-cover bg-center bg-no-repeat shadow-xl shadow-white/10 md:w-[70%] md:rounded-2xl"
        style={{ backgroundImage: `URL(${heroImage})` }}
      >
        <div className="absolute inset-0 z-0">
          <ParticleBackground />
        </div>
        <div className="relative z-20">
          <Navbar />
          <h1 className="mt-20 mr-12 ml-6 text-[32px] font-medium md:text-6xl">
            Tanvir Hossain
          </h1>
          <h2 className="mr-5 ml-6 text-[20px] text-[#22aceb] md:text-[25px]">
            <i>Frontend Developer</i>
          </h2>
          <button className="border-btn mt-10">About Me</button>
          <div className="mt-25 flex justify-center">
            <button className="group border-btn relative mt-15 mb-14">
              Latest Works
              <FontAwesomeIcon
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-2xl transition-all duration-300 ease-in-out group-hover:-bottom-8 group-hover:text-[#00BCD4]"
                icon={faArrowDown}
              />
            </button>
          </div>
          <ul className="absolute top-50 right-2 block opacity-70 md:hidden">
            <li className="mb-3">
              <a
                href="https://www.linkedin.com/in/tanvir-hossain-shifat-90537219b/"
                target="_blank"
                className="icon-effect"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </li>
            <li className="mb-3">
              <a
                href="https://wa.me/+8801981888734"
                target="_blank"
                className="icon-effect"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </li>
            <li className="mb-3">
              <a href="" target="_blank" className="icon-effect">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li className="mb-3">
              <a href="" target="_blank" className="icon-effect">
                <FontAwesomeIcon icon={faTelegramPlane} />
              </a>
            </li>
            <li className="mb-3">
              <a href="" target="_blank" className="icon-effect">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <About />
    </>
  );
};
