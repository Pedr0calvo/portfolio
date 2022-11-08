import React, { useContext } from "react";
import style from "./Me.module.css";
import me from "../../assests/7f5f8af9-4921-4968-8c73-06f828f1a339.jpg";
import cv from "../../assests/PedroCalvoCV.pdf";
import cvEn from "../../assests/PedroCalvoCV EN.pdf";
import ThemeContext from "../../context/ThemeContext";
import LanguageContext from "../../context/LanguageContext";

export const Me = () => {
  const { theme } = useContext(ThemeContext);
  const { texts } = useContext(LanguageContext);
  return (
    <div className={`${style.container} ${theme}`} id="me">
      <div className={style.me}>
        <img src={me} alt="me"></img>
      </div>
      <div className={style.text}>
        <h1>{texts.meSoy}</h1>
        <h2>{texts.meSoy1}</h2>
        <h2>{texts.meScroll}</h2>
        {texts.lag === "EN" ? (
          <div className={style.cv}>
            <a href={cvEn} download="Pedro Calvo CV En">
              {texts.meCV}
            </a>
          </div>
        ) : (
          <div className={style.cv}>
            <a href={cv} download="Pedro Calvo CV">
              {texts.meCV}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
