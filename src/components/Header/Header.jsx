import React, { useContext } from "react";
import style from "./Header.module.css";
import logo from "../../assests/pedro calvo.png";
import sun from "../../assests/sun.png";
import moon from "../../assests/moon.png";
import ThemeContext from "../../context/ThemeContext";
import LanguageContext from "../../context/LanguageContext";

export const Header = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  const { texts, handleLanguage } = useContext(LanguageContext);

  return (
    <header className={`${style.header} ${theme}`}>
      <div className={style.container}>
        <div className={style.logo}>
          <a class="btnHeader" href="/#me">
            <img src={logo} alt="logo"></img>
          </a>
        </div>
        <div className={style.lista}>
          <ul>
            <a class="btnHeader" href="/#aboutme">
              {texts.headerTitle}
            </a>
            <a class="btnHeader" href="/#skills">
              {texts.headerAptitudes}
            </a>
            <a class="btnHeader" href="/#projects">
              {texts.headerProyectos}
            </a>
            <a class="btnHeader" href="/#contact">
              {texts.headerContacto}
            </a>
          </ul>
        </div>
        <div className={style.buttons}>
          <select name="language" onChange={handleLanguage}>
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
          {theme ? (
            <img src={moon} name="theme" id="icon" onClick={handleTheme}></img>
            ) : (
            <img src={sun} name="theme" id="icon" onClick={handleTheme}></img>
          )}
        </div>
      </div>
    </header>
  );
};
