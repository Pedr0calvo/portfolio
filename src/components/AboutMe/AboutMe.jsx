import React, { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import ThemeContext from "../../context/ThemeContext";
import style from "./AboutMe.module.css";

export const AboutMe = () => {
  const { theme } = useContext(ThemeContext);
  const { texts } = useContext(LanguageContext);

  return (
    <div className={`${style.container} ${theme}`} id="aboutme">
      <div className={style.text}>
        <p>{texts.parrafo1}</p>
        <p>{texts.parrafo2}</p>
        <p>{texts.parrafo3}</p>
      </div>
    </div>
  );
};
