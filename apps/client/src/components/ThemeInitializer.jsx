import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeInitializer() {
  const { darkMode } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Optional: Apply theme class immediately
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]); // ← Tambahkan darkMode sebagai dependency

  if (!mounted) {
    return (
      <style>
        {`
          body {
            visibility: hidden;
            background: ${darkMode ? "#1a202c" : "#ffffff"};
          }
        `}
      </style>
    );
  }

  return null;
}
