import React from "react";
import { AiOutlineMail, AiFillGithub } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { LiaTelegramPlane } from "react-icons/lia";
import styles from "../styles/RightSideBar.module.css";
import SkillPlate from "./SkillPlate";
import { useTranslation } from "react-i18next";

const RightSideBar = () => {
    const { t } = useTranslation();
    return (
        <div className={styles.RightSideBar}>
            <div className={styles.informBlock}>
                <p className={styles.title}>{t("contact")}</p>
                <div className={styles.contactsLink}>
                    <AiFillGithub />
                    <a target="_blank" rel="noreferrer" href="https://github.com/futug">
                        My GitHub
                    </a>
                </div>
                <div className={styles.contactsLink}>
                    <AiOutlineMail />
                    <a href="mailto:savazkitim@gmail.com">savazkitim@gmail.com</a>
                </div>
                <div className={styles.contactsLink}>
                    <BsTelephone />
                    <a href="tel:+7(950) 325-30-29">+7(950) 325-30-29</a>
                </div>
                <div className={styles.contactsLink}>
                    <LiaTelegramPlane />
                    <a href="tg://resolve?domain=tim1162509">@tim1162509</a>
                </div>
            </div>
            <div className={styles.informBlock}>
                <p className={styles.title}>{t("skills")}</p>
                <SkillPlate skillname={"Html"} skilllevel={"80%"} />
                <SkillPlate skillname={"Css"} skilllevel={"75%"} />
                <SkillPlate skillname={"JavaScript"} skilllevel={"70%"} />
                <SkillPlate skillname={"BEM"} skilllevel={"80%"} />
                <SkillPlate skillname={"Redux/RTK"} skilllevel={"30%"} />
                <SkillPlate skillname={"ReactJs"} skilllevel={"30%"} />
                <SkillPlate skillname={"RestAPI"} skilllevel={"30%"} />
                <SkillPlate skillname={"Strapi"} skilllevel={"30%"} />
                <SkillPlate skillname={"Git"} skilllevel={"50%"} />
                <SkillPlate skillname={"Figma"} skilllevel={"70%"} />
                <SkillPlate skillname={t("comm")} skilllevel={"70%"} />
                <SkillPlate skillname={t("stress")} skilllevel={"70%"} />
                <SkillPlate skillname={"English - B2"} skilllevel={"70%"} />
            </div>
        </div>
    );
};

export default RightSideBar;
