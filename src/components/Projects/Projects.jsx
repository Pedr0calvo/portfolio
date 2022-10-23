import React, { useContext } from "react";
import style from "./Projects.module.css";
import artket from "../../assests/Artket — Mozilla Firefox 11_10_2022 19_56_15.png";
import videogames from "../../assests/Videogames App — Mozilla Firefox 20_10_2022 01_32_38.png";
import ThemeContext from "../../context/ThemeContext";
import LanguageContext from "../../context/LanguageContext";

export const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const { texts } = useContext(LanguageContext);
  return (
    <div className={`${theme} ${style.container}`} id="projects">
      <a href="https://front-videogames-dun.vercel.app/" target="_blank">
        <div className={style.card}>
          <h2>{texts.projectsName}</h2>
          <img src={videogames} alt="videogames"></img>
          {texts.visitDeploy}
        </div>
      </a>
      <a href="https://artket.vercel.app/" target="_blank">
        <div className={style.card}>
          <h2>{texts.projectsName1}</h2>
          <img src={artket} alt="artket"></img>
          {texts.visitDeploy}
        </div>
      </a>
    </div>
  );
};
