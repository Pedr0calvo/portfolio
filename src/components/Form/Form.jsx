import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import style from "./Form.module.css";

export const Form = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  return (
    <div className={`${style.container} ${theme}`} id="contact">
      <div className={style.form}>
        <form
          className={style.formulario}
          action="https://formsubmit.co/f2a228c18d553c63075afd13317fe5de"
          method="POST"
        >
          <label for="nombre">Nombre </label>
          <input
            placeholder="Nombre"
            class="input"
            type="text"
            name="name"
            className={style.input}
          />
          <label for="email">Email </label>
          <input
            placeholder="Email"
            class="input"
            type="text"
            name="email"
            className={style.input}
          />
          <label for="mensaje">Mensaje </label>
          <textarea
            className={style.mensaje}
            placeholder="Deje un mensaje"
            name="mensaje"
          ></textarea>
          <input
            type="hidden"
            name="_next"
            value="https://pedrocalvo.vercel.app/"
          />
          <input
            class="button"
            className={style.submit}
            type="submit"
            value="Enviar"
          />
        </form>
      </div>
    </div>
  );
};
