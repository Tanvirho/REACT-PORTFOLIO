import React from "react";
import { ProjectData } from "../assets/ProjectData";
import { ProjectItem } from "./ProjectItem";

export const Projects = () => {
  return (
    <>
      {ProjectData.map((data) => {
        return (
          <div key={data.id} className="mt-20 md:p-3">
            <ProjectItem
              picture={data.picture}
              title={data.title}
              subtitle={data.subtitle}
              description={data.description}
              id={data.id}
              link={data.link}
              frameworks={data.Frameworks}
            />
          </div>
        );
      })}
    </>
  );
};
