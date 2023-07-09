import React from "react";
import { AiOutlineMail, AiFillGithub } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { LiaTelegramPlane } from "react-icons/lia";
import styles from "../styles/RightSideBar.module.css";
import SkillPlate from "./SkillPlate";

const RightSideBar = () => {
    return (
        <div className={styles.RightSideBar}>
            <div className={styles.informBlock}>
                <p className={styles.title}>Contact me</p>
                <div className={styles.contactsLink}>
                    <AiFillGithub />
                    <a target="_blank" href="https://github.com/futug">
                        My GitHub
                    </a>
                </div>
                <div className={styles.contactsLink}>
                    <AiOutlineMail />
                    <a href="mailto:savazkitim@gmail.com">savazkitim@gmail.com</a>
                </div>
                <div className={styles.contactsLink}>
                    <BsTelephone />
                    <a href="tel:+996550107209">+996 550 107209</a>
                </div>
                <div className={styles.contactsLink}>
                    <LiaTelegramPlane />
                    <a href="tg://resolve?domain=<tim116250990>">@tim116250990</a>
                </div>
            </div>
            <div className={styles.informBlock}>
                <p className={styles.title}>Skills</p>
                <SkillPlate skillname={"Html"} skilllevel={"80%"} />
                <SkillPlate skillname={"Css"} skilllevel={"75%"} />
                <SkillPlate skillname={"JavaScript"} skilllevel={"70%"} />
                <SkillPlate skillname={"BEM"} skilllevel={"80%"} />
                <SkillPlate skillname={"Redux"} skilllevel={"30%"} />
                <SkillPlate skillname={"ReactJs"} skilllevel={"30%"} />
                <SkillPlate skillname={"Figma"} skilllevel={"70%"} />
                <SkillPlate skillname={"Communication"} skilllevel={"70%"} />
                <SkillPlate skillname={"Stress resistance"} skilllevel={"70%"} />
                <SkillPlate skillname={"English - B2"} skilllevel={"70%"} />
            </div>
        </div>
    );
};

export default RightSideBar;
