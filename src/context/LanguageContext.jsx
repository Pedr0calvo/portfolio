import { createContext, useState } from "react";

const LanguageContext = createContext();

const initialLanguage = "en";
const translations = {
  en: {
    headerTitle: "About me",
    headerAptitudes: "Skills",
    headerProyectos: "Projects",
    headerContacto: "Contact",
    meSoy: "Hi, Im Pedro Calvo",
    meSoy1: "Full-Stack developer",
    meScroll: "Scroll to see my portfolio",
    meCV:'Download my resume',
    projectsName: "Videogames",
    projectsName1: "Artket",
    visitDeploy: "Go to deploy",
    parrafo1: "My name is Pedro Calvo am twenty-three years old.",
    parrafo2:
      "I'm a full-stack developer with a passion for technology and software development.",
    parrafo3:
      "I have experience working with the PERN stack and keep adding technologies to my stack like Docker, MongoDB and AWS cloud. I’ve worked on different projects using agile methodologies like scrum. I consider myself adaptable, communicative and a leader",
    formName: "Name",
    formEmail: "Email",
    formMsg: "Message",
    formLeavemsg: "Leave a message",
    formSend: "Send",
    footerCreate: "Created by Pedro Calvo",
    footerContact: "Contact me:",
    lag: 'EN'
  },
  es: {
    headerTitle: "Sobre mí",
    headerAptitudes: "Aptitudes",
    headerProyectos: "Proyectos",
    headerContacto: "Contacto",
    meSoy: "Hola, soy Pedro Calvo",
    meSoy1: "Desarrollador full-stack",
    meScroll: "Scrollea para conocer mi portfolio",
    meCV:'Descarga mi CV',
    projectsName: "Videojuegos",
    projectsName1: "Artket",
    visitDeploy: "Visita el despliegue",
    parrafo1:
      "Soy Pedro tengo 23 años y soy Desarrollador Full Stack. Durante la pandemia me reinventé y decidí adentrarme en el desarrollo de software ya que es una disciplina que me apasiona.",
    parrafo2:
      "Estudié desarrollo en Henry donde obtuve la capacidad de trabajar con tecnologías como HTML, CSS, Javascript, React, Redux, Node.js, Express, Postgres, Sequelize, Scrum; y estudio todos los días para superarme diariamente. Además cuento con nivel intermedio de inglés.",
    parrafo3:
      "Por otro lado más allá de la experiencia ganada durante el transcurso del bootcamp, lleve a cabo una SPA y un e-commerce. Hoy en día considero que tengo los conocimientos necesarios y estoy en búsqueda de mi primer empleo en el sector IT.",
    formName: "Nombre",
    formEmail: "Email",
    formMsg: "Mensaje",
    formLeavemsg: "Deje su mensaje ",
    formSend: "Enviar",
    footerCreate: "Creado por Pedro Calvo",
    footerContact: "Contáctame:",
    lag: 'ES'
  },
};

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translations[language]);

  const handleLanguage = (e) => {
    if (e.target.value === "es") {
      setLanguage("es");
      setTexts(translations.es);
    } else {
      setLanguage("en");
      setTexts(translations.en);
    }
  };

  const data = { texts, handleLanguage };

  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
};

export { LanguageProvider };
export default LanguageContext;
