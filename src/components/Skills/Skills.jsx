import React from "react";
import style from "./Skills.module.css";
import css from "../../assests/css-3.png";
import js from "../../assests/js.png";
import react from "../../assests/physics.png";
import postgrs from "../../assests/postgre.png";
import node from "../../assests/nodo-js.png";
import html from "../../assests/html-5.png";

export const Skills = () => {
  return (
    <div className={style.container}>
        {/* <h1>Skills</h1> */}
      <div className={style.cuadricula}>
        <div className={style.icono}>
          <img src={js} alt="js"></img>
          <div className={style.description}>Javascript</div>
        </div>
        <div className={style.icono}>
          <img src={postgrs} alt="postgrs"></img>
          <div className={style.description}>PostgreSQL</div>
        </div>
        <div className={style.icono}>
          <img src={node} alt="node"></img>
          <div className={style.description}>Node JS</div>
        </div>
        <div className={style.icono}>
          <img src={css} alt="css"></img>
          <div className={style.description}>CSS3</div>
        </div>
        <div className={style.icono}>
          <img src={html} alt="html"></img>
          <div className={style.description}>HTML5</div>
        </div>
        <div className={style.icono}>
          <img src={react} alt="react"></img>
          <div className={style.description}>React JS</div>
        </div>
      </div>
    </div>
  );
};
