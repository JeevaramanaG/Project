import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Jeevaramana</h1>
        <p className={styles.description}>
          "Enthusiastic IT fresher skilled in C and Python, aspiring to excel as
          a full-stack developer. Eager to contribute to innovative projects, I
          bring a solid foundation and a passion for continuous learning.
          Committed to making a meaningful impact in the dynamic field of IT."
        </p>
        <a
          href="mailto:chitramurugesank@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("Hero/heroImage.png")}
        alt="Image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
