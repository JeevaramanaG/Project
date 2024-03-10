import React from "react";
import Style from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";
export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={Style.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={` Image of${title}`}
        className={Style.image}
      />
      <h3 className={Style.title}>{title}</h3>
      <p className={Style.description}>{description}</p>
      <ul className={Style.skills}>
        {skills.map((skills, id) => {
          return (
            <li key={id} className={Style.skill}>
              {skills}
            </li>
          );
        })}
      </ul>
      <div className={Style.links}>
        <a href={demo} className={Style.link}>
          Demo
        </a>
        <a href={source} className={Style.link}>
          Source
        </a>
      </div>
    </div>
  );
};
