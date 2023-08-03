import React from "react";
import { Experience } from "./Experience";
import styles from "../styles/MainContent.module.css";
import { useTranslation } from "react-i18next";

const MainContent = () => {
    const { t } = useTranslation();
    return (
        <div className={styles.mainContent}>
            <h3 className={styles.titleMain}>{t("about")}</h3>
            <p>{t("aboutText")}</p>
            <p>{t("aboutText2")}</p>
            <ul>
                <li>{t("listItem1")}</li>
                <li>{t("listItem2")}</li>
                <li>{t("listItem3")}</li>
            </ul>
            <div className={styles.block}>
                <h3 className={styles.titleMain}>{t("experience")}</h3>
                <Experience exptitle={t("expTitle")} expcompany={t("expCompany")} expdate={t("expDate")} expdescribe={t("expResp")} />
            </div>
            <div className={styles.block}>
                <h3 className={styles.titleMain}>{t("edu")}</h3>
                <p className={styles.eduTitle}>{t("eduPlace")}</p>
                <div className={styles.dateGroup}>
                    <p>{t("eduDateFrom")}</p>
                    <p> - </p>
                    <p>{t("eduDateTo")}</p>
                </div>
            </div>
        </div>
    );
};

export default MainContent;
