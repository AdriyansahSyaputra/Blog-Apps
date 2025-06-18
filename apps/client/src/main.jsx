import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/style.css";
import App from "./App.jsx";
import { HelmetProvider } from "react-helmet-async";
import ThemeProvider from "./context/ThemeProvider.jsx";
import ThemeInitializer from "./components/ThemeInitializer.jsx";
import { AuthProvider } from "./context/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <ThemeInitializer />
        <AuthProvider>
          <App />
        </AuthProvider>
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>
);
