import React, { useEffect, useState } from "react";
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

export const Hero = ({ isDark, setIsDark }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    if (isScroll) {
      window.scrollBy({
        top: 800,
        left: 0,
        behavior: "smooth",
      });
      setIsScroll(false);
    }
  }, [isScroll]);
  return (
    <>
      <div
        className="relative h-screen w-full overflow-hidden bg-cover bg-center bg-no-repeat text-white shadow-xl shadow-white/10"
        style={{ backgroundImage: `URL(${heroImage})` }}
      >
        <div className="absolute inset-0 z-0">
          <ParticleBackground />
        </div>
        <div className="absolute z-40 w-full">
          <Navbar isDark={isDark} setIsDark={setIsDark} />
        </div>
        <div className="relative z-20 flex h-full flex-col justify-center">
          <h1 className="mr-12 ml-6 text-[32px] font-medium md:text-7xl">
            Tanvir Hossain
          </h1>
          <h2 className="mr-5 ml-6 text-[20px] text-[#22aceb] md:text-[30px]">
            <i>Frontend Developer</i>
          </h2>
          <div>
            <button
              className="border-btn mt-10"
              onClick={() => setIsOpen(true)}
            >
              About Me
            </button>
          </div>
          <ul className="absolute top-1/2 right-2 block -translate-y-1/2 space-y-8 opacity-70">
            <li>
              <a
                href="https://www.linkedin.com/in/tanvir-hossain-shifat-90537219b/"
                target="_blank"
                className="icon-effect"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/+8801981888734"
                target="_blank"
                className="icon-effect"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/tanvir.hossain.shifat.491031/"
                target="_blank"
                className="icon-effect"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li>
              <a
                href="https://t.me/ANONYMOUS20058"
                target="_blank"
                className="icon-effect"
              >
                <FontAwesomeIcon icon={faTelegramPlane} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Tanvirho"
                target="_blank"
                className="icon-effect"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
        </div>
        <div className="absolute bottom-10 left-1/2 z-40 w-full -translate-1/2 text-center">
          <button
            className="group border-btn relative"
            onClick={() => setIsScroll(true)}
          >
            Latest Works
            <FontAwesomeIcon
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-2xl transition-all duration-300 ease-in-out group-hover:-bottom-8 group-hover:text-[#00BCD4]"
              icon={faArrowDown}
            />
          </button>
        </div>
      </div>
      <About isOpen={isOpen} setIsOpen={setIsOpen} isDark={isDark} />
    </>
  );
};
