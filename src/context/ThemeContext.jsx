import { createContext, useState } from "react";

const ThemeContext = createContext();

const initialTheme = localStorage.getItem('theme');

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialTheme);

  const handleTheme = (e) => {
    localStorage.setItem("theme", !theme);
    setTheme(!theme);
  };
  
  const data = { theme, handleTheme };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };
export default ThemeContext;
