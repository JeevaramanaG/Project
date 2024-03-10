import React from "react";
import Style from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="Contact" className={Style.container}>
      <div className={Style.text}>
        <h2 className={Style.title}>Contact</h2>
        <p className={Style.description}>Feel free to reachout!</p>
      </div>
      <ul className={Style.links}>
        <li className={Style.link}>
          <img src={getImageUrl("Contact/emailIcon.png")} alt="EmailId" />
          <a href="mailto:chitramurugesank@gmail.com">
            chitramurugesank@gmail.com
          </a>
        </li>
        <li className={Style.link}>
          <img src={getImageUrl("Contact/linkedinIcon.png")} alt="Linkedin" />
          <a href="https://www.linkedin.com/in/jeevaramana-g-432611276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            www.Linkedin.com
          </a>
        </li>
        <li className={Style.link}>
          <img src={getImageUrl("Contact/githubIcon.png")} alt="Github" />
          <a href="https://github.com/JeevaramanaG/Project">www.Github.com</a>
        </li>
      </ul>
    </footer>
  );
};
