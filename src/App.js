import "./App.css";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { Me } from "./components/Me/Me";
import { BrowserRouter } from "react-router-dom";
import { Skills } from "./components/Skills/Skills";
import { Projects } from "./components/Projects/Projects";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Form } from "./components/Form/Form";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Me />
      <Skills />
      <Projects />
      <AboutMe />
      <Form />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
