import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {

    return (
        <section className={styles.section} id="About">
            <h2 className={styles.title}>About</h2>
            <div className={styles.container}>
                <div className={styles.container2}>
                    <div className={styles.content}> 
                        <ul className={styles.aboutItems}>
                            <li className={styles.aboutItem}>
                                <div className={styles.aboutItemText}>
                                    <h3>Education:</h3>
                                    <p>
                                        I recently graduated from Newcastle Univsersity in the UK, achieving a 
                                        first-class honours degree and dissertation.
                                    </p>
                                </div>
                            </li>
                            <li className={styles.aboutItem}>
                                <div className={styles.aboutItemText}>
                                    <h3>Skill Set:</h3>
                                    <p>
                                        I have worked with a range of languages, tools, and frameworks:
                                        Python, Java, C, CSS, HTML, React,  JavaScript XML, Flask, Figma, Microsoft Office, Visual Studio Code, Github
                                    </p>
                                </div>
                            </li>
                            <li className={styles.aboutItem}>
                                <div className={styles.aboutItemText}>
                                    <h3>Projects:</h3>
                                    <p>
                                        I've worked on several projects, most recently building a React-based portfolio, showcasing my design and development capabilities as well as my ability to self teach and learn quickly.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                {<img
                    src={getImageUrl("about/aboutImage.png")}
                    alt="About Image"
                    className={styles.aboutImage}>
                </img>}
            </div>
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
        </section>
    );
}