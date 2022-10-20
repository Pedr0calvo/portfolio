import React from "react";
import style from "./Form.module.css";

export const Form = () => {
  return (
    <div className={style.container}>
      <div className={style.form}>
        <form
          className={style.formulario}
          action="https://formsubmit.co/pedro7calvo@gmail.com"
          method="POST"
        >
          <label for="nombre">Nombre </label>
          <input placeholder="Nombre" class="input" type="text" name="name" />
          <label for="email">Email </label>
          <input placeholder="Email" class="input" type="text" name="email" />
          <label for="mensaje">Mensaje </label>
          <textarea
            className={style.mensaje}
            placeholder="Deje un mensaje"
            name="mensaje"
          ></textarea>
          <input type="hidden" name="_next" value="http://localhost:3000/" />
          <input class="button" type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  );
};
