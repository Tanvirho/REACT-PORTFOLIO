import React from "react";
import Logo from "../assets/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faFile,
  faPhone,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import Resume from "../assets/Tanvir Hossain Shifat.pdf";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <img className="mt-2 ml-3 w-20" src={Logo} alt="Logo" />
      <div className="mr-4 text-end">
        <ul className="flex space-x-5">
          <li className="group relative">
            <a href="tel:01981888734" target="_blank">
              <FontAwesomeIcon
                className="cursor-pointer text-[18px] hover:text-[#00BCD4]"
                icon={faPhone}
              />
            </a>
            <span className="absolute -top-12 left-1/2 -translate-1/2 rounded-2xl bg-[#8E2DE2] px-3 py-2 text-[12px] transition-all duration-300 ease-in-out group-hover:top-12 after:absolute after:top-0.5 after:left-1/2 after:h-3 after:w-3 after:-translate-1/2 after:rotate-45 after:bg-[#8E2DE2] after:contain-['']">
              Contact
            </span>
          </li>
          <li className="group relative">
            <a href="mailto:tanvirhossien13@gmail.com" target="_blank">
              <FontAwesomeIcon
                className="cursor-pointer text-[18px] hover:text-[#00BCD4]"
                icon={faEnvelope}
              />
            </a>
            <span className="absolute -top-12 left-1/2 -translate-1/2 rounded-2xl bg-[#8E2DE2] px-3 py-2 text-[12px] transition-all duration-300 ease-in-out group-hover:top-12 after:absolute after:top-0.5 after:left-1/2 after:h-3 after:w-3 after:-translate-1/2 after:rotate-45 after:bg-[#8E2DE2] after:contain-['']">
              Email
            </span>
          </li>
          <li className="group relative">
            <a href={Resume} target="_blank">
              <FontAwesomeIcon
                className="cursor-pointer text-[18px] hover:text-[#00BCD4]"
                icon={faFile}
              />
            </a>
            <span className="absolute -top-12 left-1/2 -translate-1/2 rounded-2xl bg-[#8E2DE2] px-3 py-2 text-[12px] transition-all duration-300 ease-in-out group-hover:top-12 after:absolute after:top-0.5 after:left-1/2 after:h-3 after:w-3 after:-translate-1/2 after:rotate-45 after:bg-[#8E2DE2] after:contain-['']">
              Resume
            </span>
          </li>
          <li className="md:hidden">
            <FontAwesomeIcon
              className="cursor-pointer text-[18px] hover:text-[#00BCD4]"
              icon={faSun}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};
