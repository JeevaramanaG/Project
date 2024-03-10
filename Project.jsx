import React from "react";
import Style from "./Project.module.css";
import project from "../../Data/project.json";
import { ProjectCard } from "./ProjectCard";
export const Project = () => {
  return (
    <section className={Style.container} id="project">
      <h2 className={Style.title}>Projects</h2>
      <div className={Style.Projects}>
        {project.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
