import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="About">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("About/aboutImage.png")}
          alt="Sitting with a lap"
          className={styles.aboutImage}
        />
        <ul className={styles.items}>
          <li className={styles.item}>
            <img src={getImageUrl("About/uiIcon.png")} alt="Cursor" />
            <div className={styles.aboutItemtext}>
              <h3>Full-Stack Development</h3>
              <p>
                Well-versed in full-stack development, combining both front-end
                and back-end technologies.
              </p>
            </div>
          </li>
          <li className={styles.item}>
            <img src={getImageUrl("About/cursorIcon.png")} alt="Cursor" />
            <div className={styles.aboutItemtext}>
              <h3>Java Development</h3>
              <p>
                Proficient in developing scalable and efficient applications
                using Java.
              </p>
            </div>
          </li>
          <li className={styles.item}>
            <img src={getImageUrl("About/serverIcon.png")} alt="Cursor" />
            <div className={styles.aboutItemtext}>
              <h3>Python Development</h3>
              <p>
                Skilled in Python programming for diverse applications, from
                scripting to web development.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
