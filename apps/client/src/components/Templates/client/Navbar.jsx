import { useState, useEffect } from "react";
import {
  Sun,
  Moon,
  Menu,
  X,
  Home,
  BookText,
  PenLine,
  Tags,
  Sparkles,
} from "lucide-react";
import { useTheme } from "../../../context/ThemeContext";

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { darkMode, toggleTheme } = useTheme();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", icon: <Home className="h-5 w-5" />, path: "/" },
    {
      name: "Articles",
      icon: <BookText className="h-5 w-5" />,
      path: "/articles",
    },
    { name: "Write", icon: <PenLine className="h-5 w-5" />, path: "/write" },
    {
      name: "Categories",
      icon: <Tags className="h-5 w-5" />,
      path: "/categories",
    },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <nav
        className={`container mx-auto px-6 py-3 rounded-xl backdrop-blur-lg transition-all duration-300 ${
          darkMode
            ? "bg-gray-900/80 border-gray-800"
            : "bg-white/80 border-gray-200"
        } border ${scrolled ? "max-w-5xl shadow-lg" : "max-w-7xl shadow-sm"}`}
      >
        <div className="flex items-center justify-between">
          {/* Logo with animated gradient */}
          <a href="/" className="flex items-center space-x-2 group">
            <div
              className={`p-2 rounded-lg transition-all duration-300 ${
                darkMode
                  ? "bg-indigo-900/30 group-hover:bg-indigo-900/50"
                  : "bg-indigo-100 group-hover:bg-indigo-200"
              }`}
            >
              <PenLine
                className={`h-6 w-6 transition-all duration-500 ${
                  darkMode ? "text-indigo-300" : "text-indigo-600"
                }`}
              />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              BlogZen
              <Sparkles className="inline ml-1 h-5 w-5 text-yellow-400 animate-pulse" />
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className={`relative px-1 py-2 font-medium transition-all duration-200 ${
                    darkMode
                      ? "text-gray-300 hover:text-indigo-300"
                      : "text-gray-700 hover:text-indigo-600"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-indigo-500 transition-all duration-300 ${
                      darkMode ? "opacity-80" : "opacity-100"
                    } scale-x-0 group-hover:scale-x-100 origin-left`}
                  ></span>
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              {/* Dark Mode Toggle with smooth animation */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-all duration-300 ${
                  darkMode
                    ? "bg-gray-800 hover:bg-gray-700 text-yellow-300"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <Sun className="h-5 w-5 animate-pulse" />
                ) : (
                  <Moon className="h-5 w-5 animate-spin duration-1000" />
                )}
              </button>

              {/* Auth Buttons */}
              <button
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  darkMode
                    ? "text-gray-300 hover:bg-gray-800"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Login
              </button>
              <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-indigo-500/20">
                Register
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
              darkMode
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className={`md:hidden mt-4 py-4 rounded-xl transition-all duration-300 ${
              darkMode ? "bg-gray-800/90" : "bg-white/90"
            }`}
          >
            <div className="flex flex-col space-y-4 px-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className={`flex items-center space-x-3 py-2 px-3 rounded-lg transition-all duration-200 ${
                    darkMode
                      ? "text-gray-300 hover:bg-gray-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <span
                    className={`p-1.5 rounded-md ${
                      darkMode ? "bg-gray-700" : "bg-gray-100"
                    }`}
                  >
                    {link.icon}
                  </span>
                  <span className="font-medium">{link.name}</span>
                </a>
              ))}
            </div>
            <div className="flex space-x-3 mt-6 px-4">
              <button
                className={`flex-1 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                  darkMode
                    ? "bg-gray-700 hover:bg-gray-600"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                Login
              </button>
              <button className="flex-1 py-2.5 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300">
                Register
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
