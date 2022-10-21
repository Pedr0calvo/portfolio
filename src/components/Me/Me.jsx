import React, { useContext } from "react";
import style from "./Me.module.css";
import me from "../../assests/7f5f8af9-4921-4968-8c73-06f828f1a339.jpg";
import ThemeContext from "../../context/ThemeContext";

export const Me = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={`${style.container} ${theme}`} id='me'>
      <div className={style.me}>
        <img src={me} alt="me"></img>
      </div>
      <div className={style.text}>
        <h1>Hola, soy Pedro Calvo</h1>
        <h2>Desarrollador full-stack</h2>
        <h2>Scrollea para conocer mi portfolio</h2>
      </div>
    </div>
  );
};
