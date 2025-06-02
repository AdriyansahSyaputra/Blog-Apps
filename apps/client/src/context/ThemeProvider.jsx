import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext.jsx";

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  // Initialize theme from localStorage/system preference
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    setDarkMode(savedMode ? savedMode === "true" : systemPrefersDark);
  }, []);

  // Apply class to root element
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
