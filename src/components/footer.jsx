import React from "react";
import HeroLogo from "../assets/HeroLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons/faWhatsapp";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons/faTelegramPlane";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-10 flex flex-col items-center pb-15">
      <p className="text-[14px]">
        © {currentYear} Tanvir Hossain. All Reserved.
      </p>
      <img className="w-30" src={HeroLogo} alt="Logo" />
      <ul className="flex flex-wrap justify-center space-x-4 text-2xl text-[#00BCD4]">
        <li>
          <a
            href="https://www.linkedin.com/in/tanvir-hossain-shifat-90537219b/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </li>
        <li>
          <a href="https://wa.me/+8801981888734" target="_blank">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/tanvir.hossain.shifat.491031/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li>
          <a href="https://t.me/ANONYMOUS20058" target="_blank">
            <FontAwesomeIcon icon={faTelegramPlane} />
          </a>
        </li>
        <li>
          <a href="https://github.com/Tanvirho" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
