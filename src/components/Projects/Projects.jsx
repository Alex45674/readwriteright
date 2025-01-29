import React from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { getImageUrl } from "../../utils";
import { ProjectCard } from "./ProjectCard";


export const Projects = () => {
    return (
        <section className={styles.container} id="Projects">
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.projects}>
                {
                    projects.map((project, id) => {
                        return (
                            <ProjectCard key={id} project={project}></ProjectCard>
                        );
                    })
                }
            </div>
            <div className={styles.bottomBlur}></div>    
        </section>
    );
};