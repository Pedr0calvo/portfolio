import React, { useContext } from "react";
import style from "./Footer.module.css";
import github from "../../assests/signo-de-github.png";
import linkedIn from "../../assests/linkedin(1).png";
import mail from "../../assests/gmail.png";
import ThemeContext from "../../context/ThemeContext";
import LanguageContext from "../../context/LanguageContext";

export const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const { texts } = useContext(LanguageContext);
  return (
    <div className={`${theme} ${style.footer}`}>
      <div className={style.container}>
        <div>{texts.footerCreate}</div>
        <br></br>
        <div className={style.contactame}>
          {texts.footerContact}
          <div className={style.github}>
            <a href="https://github.com/Pedr0calvo" target="_blank">
              <img src={github} alt="github"></img>
            </a>
          </div>
          <div className={style.linkedIn}>
            <a href="https://www.linkedin.com/in/pedro-calvo/" target="_blank">
              <img src={linkedIn} alt="linkedIn"></img>
            </a>
          </div>
          <div className={style.mail}>
            <a>
              <img src={mail} alt="mail"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
