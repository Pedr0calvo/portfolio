import React from "react";
import style from "./Me.module.css";
import me from "../../assests/7f5f8af9-4921-4968-8c73-06f828f1a339.jpg";

export const Me = () => {
  return (
    <div className={style.container} id='me'>
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
