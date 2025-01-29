import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";


export const Experience = () => {
    return (
        <section className={styles.container} id="Experience">  
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>
                <div className={styles.skills}>{
                    skills.map((skill, id) => {
                        const animationDelay = `${(id / skills.length) * -40}s`;
                        return (
                            <div key={id} className={styles.skill} style={{ animationDelay }}>
                                <div className={styles.skillImageContainer}>
                                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title}></img>
                                </div>
                                <p></p>
                            </div>
                        );
                    })}
                </div>  
                <div className={styles.topBlur}></div>

                <ul className={styles.history}>
                    {
                        history.map((historyItem, id) => {
                            return (
                                <li key={id} className={styles.historyItem}>
                                    <div className={styles.container2}>
                                        <img
                                            src={getImageUrl(historyItem.imageScr)}
                                            alt={`${historyItem.organisation} Logo`}>
                                        </img>
                                        <div className={styles.historyItemDetails}>
                                            <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                            <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                            <ul>{historyItem.experiences.map((experience, id) => {
                                                return <li key={id}>{experience}</li>
                                            })}</ul>
                                        </div>
                                    </div>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
            <div className={styles.bottomBlur}></div>
        </section>
    );
};