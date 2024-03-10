import React from "react";
import SkillsData from "../../Data/Skills.json";
import Styles from "./Skills.module.css";
import { getImageUrl } from "../../utils";

export const Skills = () => {
  return (
    <section className={Styles.container} id="Skills">
      <h2 className={Styles.title}>Skills</h2>
      <div className={Styles.content}>
        {SkillsData.map((skill, id) => {
          return (
            <div key={id} className={Styles.Skill}>
              <div className={Styles.SkillImage}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
