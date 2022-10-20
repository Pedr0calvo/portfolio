import React from "react";
import style from "./AboutMe.module.css";

export const AboutMe = () => {
  return (
    <div className={style.container}>
      <div className={style.text}>
        <p>
          Soy Pedro tengo 23 años y soy Desarrollador Full Stack. Durante la
          pandemia me reinventé y decidí adentrarme en el desarrollo de software
          ya que es una disciplina que me apasiona.
        </p>
        <p>
          Estudié desarrollo en Henry (+600hs) donde obtuve la capacidad de
          trabajar con tecnologías como HTML, CSS, Javascript, React, Redux,
          Node.js, Express, Postgres, Sequelize, Scrum; y estudio todos los días
          para superarme diariamente. Además cuento con nivel intermedio de
          inglés (B1).
        </p>{" "}
        <p>
          Por otro lado más allá de la experiencia ganada durante el transcurso
          del bootcamp, lleve a cabo una SPA y un e-commerce. Hoy en día
          considero que tengo los conocimientos necesarios y estoy en búsqueda
          de mi primer empleo en el sector IT.
        </p>
      </div>
    </div>
  );
};
