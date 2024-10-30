import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css"

const About = () => {
    return (
        <section className={styles.container} id="about">
          <h2 className={styles.title}>About</h2>
          <div className={styles.content}>
            <img
              src={getImageUrl("about/aboutImage.png")}
              alt="Me sitting with a laptop"
              className={styles.aboutImage}
            />
            <ul className={styles.aboutItems}>
              <li className={styles.aboutItem}>
                <div className={styles.aboutItemText}>
                 <p> Business informatics student with experience in software development, software engineering. Enthusiastic about working with new and innovative technologies, able to work in a team and ready for new challenges.</p>
                </div>
              </li>
              <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
                <div className={styles.aboutItemText}>
                  <h3>Frontend Developer</h3>
                  <p>
                    I'm a frontend developer with experience in building responsive
                    sites
                  </p>
                </div>
              </li>
              <li className={styles.aboutItem}>
                <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
                <div className={styles.aboutItemText}>
                  <h3>Backend Developer</h3>
                  <p>
                    I have experience developing back-end systems
                    and APIs. 
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>
      );
};

export default About;
