import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
    return (
        <footer id="Contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to contact me at:</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon"></img>
                    <a href="mailto:portessalex@outlook.com">portessalex@outlook.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin icon"></img>
                    <a href="https://www.linkedin.com/in/alex-portess-b43267239/">linkedin.com/alex-portess</a>
                </li>
            </ul>
        </footer>
    );
};