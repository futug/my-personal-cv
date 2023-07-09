import React from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
    return (
        <header>
            <div className={styles.header}>
                <div className={styles.titleGroup}>
                    <h1>Nafikov Timur</h1>
                    <h2 className={styles.headerSubtitle}>Junior Front-end engineer</h2>
                </div>
                <div className={styles.headerImage}></div>
            </div>
            <hr />
        </header>
    );
};

export default Header;
