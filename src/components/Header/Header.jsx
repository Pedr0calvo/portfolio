import React, { useContext } from "react";
import style from "./Header.module.css";
import logo from "../../assests/pedro calvo.png";
import sun from "../../assests/sun.png";
import moon from "../../assests/moon.png";
import ThemeContext from "../../context/ThemeContext";

export const Header = () => {
  const { theme, handleTheme } = useContext(ThemeContext);

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
              Me
            </a>
            <a class="btnHeader" href="/#skills">
              Skills
            </a>
            <a class="btnHeader" href="/#projects">
              Projects
            </a>
            <a class="btnHeader" href="/#contact">
              Contact
            </a>
          </ul>
        </div>
        <div className={style.buttons}>
          {/* <label className={style.switch}>
            <input type="checkbox" />
            <div className={style.slider}></div>
          </label> */}
          {theme === true ? (
            <img src={sun} name="theme" id="icon" onClick={handleTheme}></img>
          ) : (
            <img src={moon} name="theme" id="icon" onClick={handleTheme}></img>
          )}
        </div>
      </div>
    </header>
  );
};
