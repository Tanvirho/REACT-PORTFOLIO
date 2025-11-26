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
          <li>
            <a href="tel:01981888734" target="_blank">
              <FontAwesomeIcon
                className="cursor-pointer text-[18px] hover:text-[#00BCD4]"
                icon={faPhone}
              />
            </a>
          </li>
          <li>
            <a href="mailto:tanvirhossien13@gmail.com" target="_blank">
              <FontAwesomeIcon
                className="cursor-pointer text-[18px] hover:text-[#00BCD4]"
                icon={faEnvelope}
              />
            </a>
          </li>
          <li>
            <a href={Resume} target="_blank">
              <FontAwesomeIcon
                className="cursor-pointer text-[18px] hover:text-[#00BCD4]"
                icon={faFile}
              />
            </a>
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
