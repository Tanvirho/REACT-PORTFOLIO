import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export const ProjectItem = (props) => {
  const flexDirection =
    props.id % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row";
  const flexStyle = props.id % 2 === 0 ? "text-[#00BCD4]" : "text-[#fc815c]";

  return (
    <>
      <div
        className={`flex flex-col p-6 md:p-0 ${flexDirection} md:items-center md:justify-between`}
      >
        <div
          className={`absolute left-1/2 z-10 hidden h-4 w-4 -translate-x-1/2 rounded-full border-3 md:block ${props.id % 2 === 0 ? "border-[#00BCD4]" : "border-[#fc815c]"} bg-white`}
        ></div>
        <div className="group relative mx-auto w-[90%] md:mx-0 md:w-[40%]">
          <div
            className={`absolute top-0 bottom-0 hidden w-0.5 rotate-90 md:block ${props.id % 2 === 0 ? "left-5 bg-[#00BCD4]" : "right-5 bg-[#fc815c]"}`}
          ></div>
          <a href={props.link} target="_blank">
            <span
              className={`absolute top-4 left-1/2 -translate-x-1/2 rounded-2xl p-4 text-[14px] font-medium transition-all duration-300 ease-in-out group-hover:-top-18 after:absolute after:-bottom-2 after:left-1/2 after:h-5 after:w-5 after:-translate-x-1/2 after:rotate-45 after:content-[""] ${props.id % 2 === 0 ? "bg-[#00BCD4] after:bg-[#00BCD4]" : "bg-[#fc815c] after:bg-[#fc815c]"}`}
            >
              {props.title} <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </span>
            <img
              loading="lazy"
              className="relative mt-3 w-full transition-all duration-300 ease-in-out hover:scale-115"
              src={props.picture}
              alt={props.title}
            />
          </a>
        </div>
        <div className="mt-10 md:mt-0 md:w-[40%]">
          <h1 className={`mt-5 text-2xl font-medium md:text-3xl ${flexStyle}`}>
            {props.title}
          </h1>
          <h2 className={`mt-2 text-xl ${flexStyle}`}>{props.subtitle}</h2>
          <p className="mt-4 text-[16px]">{props.description}</p>
          <div className="flex flex-wrap space-x-2 md:space-x-3">
            {props.frameworks.map((framework, i) => (
              <span
                className="mt-3 rounded-full border border-gray-700 px-3 py-1 text-[10px] shadow-sm md:text-sm"
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
