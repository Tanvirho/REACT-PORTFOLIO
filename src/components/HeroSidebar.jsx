import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons/faWhatsapp";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons/faTelegramPlane";

export const HeroSidebar = () => {
  return (
    <div className="hidden h-[85%] w-[20%] rounded-2xl bg-[#181b24] p-6 shadow-xl shadow-white/10 md:block">
      <div className="text-end">
        <FontAwesomeIcon
          className="cursor-pointer text-2xl hover:text-[#00BCD4]"
          icon={faSun}
        />
      </div>
      <ul className="mt-20">
        <li className="mb-5">
          <a
            href="https://www.linkedin.com/in/tanvir-hossain-shifat-90537219b/"
            target="_blank"
            className="icon-effect"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </li>
        <li className="mb-5">
          <a
            href="https://wa.me/+8801981888734"
            target="_blank"
            className="icon-effect"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </li>
        <li className="mb-5">
          <a
            href="https://www.facebook.com/tanvir.hossain.shifat.491031/"
            target="_blank"
            className="icon-effect"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li className="mb-5">
          <a
            href="https://t.me/ANONYMOUS20058"
            target="_blank"
            className="icon-effect"
          >
            <FontAwesomeIcon icon={faTelegramPlane} />
          </a>
        </li>
        <li className="mb-5">
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
  );
};
