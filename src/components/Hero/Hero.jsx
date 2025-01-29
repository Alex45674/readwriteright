import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import heroVideo from "../../../assets/hero/heroVid.webm";

export const Hero = () => {
    const copyToClipboard = (event) => {
        event.preventDefault(); // Prevent the link from navigating away
        const email = "portessalex@outlook.com";
        navigator.clipboard.writeText(email)
            .then(() => { 
                alert("Email copied to clipboard!");
            })
            .catch((error) => {
                console.error("Failed to copy email:", error);
            });
    };
    /*<video
                src={heroVideo}
                autoPlay
                loop
                muted
                className={styles.heroImg}
            />*/
    //<a href="#" className={styles.contactBtn} onClick={copyToClipboard}>portessalex@outlook.com</a>
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi! I'm Alex :)</h1>
                <p className={styles.description}>
                    I've recently moved from the UK and excited to kick off my career here in Vancouver,
                    ready to bring my solid technical foundation and passion for impactful work to a collaborative team.
                </p>
            </div>
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
        </section>
        
    )
};

