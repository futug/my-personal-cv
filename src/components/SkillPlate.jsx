import React from "react";
import styles from "../styles/SkillPlate.module.css";

const SkillPlate = (props) => {
    return (
        <div>
            <p className={styles.skillName}>{props.skillname}</p>
            <div className={styles.progressBar}>
                <div className={styles.progressBarInner} style={{ width: props.skilllevel }}></div>
            </div>
        </div>
    );
};

export default SkillPlate;
