import "./App.css";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { Me } from "./components/Me/Me";
import { BrowserRouter } from "react-router-dom";
import { Skills } from "./components/Skills/Skills";
import { Projects } from "./components/Projects/Projects";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Form } from "./components/Form/Form";
import { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";

const initialTheme = "dark";

function App() {
  const [theme, setTheme] = useState(initialTheme);

  return (
    <BrowserRouter>
      <ThemeProvider>
        <Header />
        <Me />
        <Skills />
        <Projects />
        <AboutMe />
        <Form />
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
