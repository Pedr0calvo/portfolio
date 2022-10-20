import React from "react";
import style from "./Header.module.css";
import logo from "../../assests/pedro calvo.png";

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.logo}>
          <a>
            <img src={logo} alt="logo"></img>
          </a>
        </div>
        <div className={style.lista}>
          <ul>
            <a>Me</a>
            <a>Skills</a>
            <a>Projects</a>
            <a>Contact</a>
          </ul>
        </div>
        <div className={style.buttons}>
          <button>DARK</button>
          <button>EN</button>
        </div>
      </div>
    </header>
  );
};
