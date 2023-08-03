import React from "react";
import styles from "../styles/Header.module.css";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
import { BsMoonStars, BsSun } from "react-icons/bs";

const Header = () => {
    const { t } = useTranslation();
    const handleLang = (e) => {
        changeLanguage(e.target.value);
    };

    return (
        <header>
            <div className={styles.header}>
                <div className={styles.titleGroup}>
                    <h1>{t("name")}</h1>
                    <h2 className={styles.headerSubtitle}>Junior Front-end engineer</h2>
                    <div className={styles.langChoise}>
                        <button onClick={handleLang} value={"ru"} className={styles.choiseButton}>
                            RU
                        </button>
                        <div className={styles.separator}></div>
                        <button onClick={handleLang} value={"en"} className={styles.choiseButton}>
                            ENG
                        </button>
                    </div>
                </div>
                <div className={styles.headerImage}></div>
            </div>
            <hr />
        </header>
    );
};

export default Header;
