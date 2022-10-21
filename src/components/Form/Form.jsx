import React, { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import ThemeContext from "../../context/ThemeContext";
import style from "./Form.module.css";

export const Form = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  const { texts } = useContext(LanguageContext);
  return (
    <div className={`${style.container} ${theme}`} id="contact">
      <div className={style.form}>
        <form
          className={style.formulario}
          action="https://formsubmit.co/f2a228c18d553c63075afd13317fe5de"
          method="POST"
        >
          <label for="nombre">{texts.formName} </label>
          <input
            placeholder={texts.formName}
            class="input"
            type="text"
            name="name"
            className={style.input}
          />
          <label for="email">{texts.formEmail} </label>
          <input
            placeholder={texts.formEmail}
            class="input"
            type="text"
            name="email"
            className={style.input}
          />
          <label for="mensaje">{texts.formMsg} </label>
          <textarea
            className={style.mensaje}
            placeholder={texts.formLeavemsg}
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
            value={texts.formSend}
          />
        </form>
      </div>
    </div>
  );
};
