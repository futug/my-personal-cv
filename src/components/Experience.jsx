import React from "react";
import styles from "../styles/Experience.module.css";

export const Experience = (props) => {
    return (
        <div className={styles.expBlock}>
            <p className={styles.expTitle}>{props.exptitle}</p>
            <p className={styles.expSubtitle}>{props.expcompany}</p>
            <p className={styles.expDate}>{props.expdate}</p>
            <p className={styles.expDescribe}>{props.expdescribe}</p>
        </div>
    );
};
