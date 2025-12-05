import React from "react";

export const ProjectItem = (props) => {
  const flexDirection =
    props.id % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row";
  const flexStyle =
    props.id % 2 === 0 ? "text-[#00BCD4]" : "text-[#fc815c]";

  return (
    <>
      <div className={`p-10 md:p-0 flex flex-col ${flexDirection} md:justify-between md:items-center`}>
        <div className="w-[90%] md:w-[40%]">
          <img className="mt-3 w-full transition-all duration-300 hover:scale-115" src={props.picture} alt={props.title} />
        </div>
        <div className="md:w-[40%]">
          <h1 className={`mt-5 text-3xl font-medium ${flexStyle}`}>{props.title}</h1>
          <h2 className={`mt-2 text-xl ${flexStyle}`}>{props.subtitle}</h2>
          <p className="mt-4 text-[16px]">{props.description}</p>
        </div>
      </div>
    </>
  );
};
