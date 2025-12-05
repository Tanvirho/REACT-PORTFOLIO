import React from "react";

export const ProjectItem = (props) => {
  return (
    <>
      <img className="mt-3 w-110" src={props.picture} alt={props.title} />
    </>
  );
};
