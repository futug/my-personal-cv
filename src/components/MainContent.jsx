import React from "react";
import { Experience } from "./Experience";
import styles from "../styles/MainContent.module.css";

const MainContent = () => {
    return (
        <div className={styles.mainContent}>
            <h3 className={styles.titleMain}>About me</h3>
            <p>
                Having gained over 10 years of experience in sales, I am confident in my ability to be highly adaptable, handle stressful situations
                effectively, and possess excellent communication skills.
            </p>
            <div className={styles.block}>
                <h3 className={styles.titleMain}>Experience</h3>
                <Experience
                    exptitle={"Html - developer"}
                    expcompany={"Freelance"}
                    expdate={"February, 2023 - present - 6 months"}
                    expdescribe={"Creating attractive and well-functioning web interfaces in a short time based on customer instructions"}
                />
            </div>
            <div className={styles.block}>
                <h3 className={styles.titleMain}>Education</h3>
                <p className={styles.eduTitle}>Kazan Chemical Technology University, Kazan</p>
                <div className={styles.dateGroup}>
                    <p>Sep, 2010</p>
                    <p> - </p>
                    <p>Jun, 2015</p>
                </div>
            </div>
        </div>
    );
};

export default MainContent;
