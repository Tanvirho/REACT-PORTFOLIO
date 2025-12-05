import React from "react";
import ProjectData from "../assets/ProjectData";
import { ProjectItem } from "./ProjectItem";

export const Projects = () => {
  return (
    <>
      {ProjectData.map((data, id) => {
        if (data.id % 2 !== 0) {
          return (
            <div key={id} className="mt-20 flex justify-center md:justify-end">
              <ProjectItem picture={data.picture} />
            </div>
          );
        } else {
          return (
            <div key={id} className="mt-20 flex justify-center md:block">
              <ProjectItem picture={data.picture} />
            </div>
          );
        }
      })}
    </>
  );
};
