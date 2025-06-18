import { useState, useEffect } from "react";
import {
  Sun,
  Moon,
  Menu,
  X,
  Home,
  BookText,
  PenLine,
  Sparkles,
  SquareUser,
  Info,
} from "lucide-react";
import { useTheme } from "../../../context/ThemeContext";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import NotificationCard from "../../Fragments/NotificationCard";

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notification, setNotification] = useState(null);
  const { darkMode, toggleTheme } = useTheme();
  const { user, logout, isFetched } = useAuth();
  const navigate = useNavigate();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isFetched) return null;

  const handleLogout = () => {
    logout();

    setNotification({
      type: "success",
      message: "Logout successful",
    });

    setTimeout(() => {
      navigate("/auth");
    }, 2500);
  };

  const navLinks = [
    { name: "Home", icon: <Home className="h-5 w-5" />, path: "/" },
    {
      name: "Articles",
      icon: <BookText className="h-5 w-5" />,
      path: "/articles",
    },
    { name: "About", icon: <Info className="h-5 w-5" />, path: "/about" },
    {
      name: "Contact",
      icon: <SquareUser className="h-5 w-5" />,
      path: "/contact",
    },
  ];

  return (
    <>
      {notification && (
        <NotificationCard
          type={notification.type}
          message={notification.message}
          onClose={() => setNotification(null)}
        />
      )}

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
                  <Link
                    key={link.name}
                    to={link.path}
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
                  </Link>
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
                {user ? (
                  <div className="relative">
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md hover:shadow-lg transition-all duration-200"
                    >
                      {/* Avatar User */}
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center overflow-hidden border-2 border-white">
                        {user.avatar ? (
                          <img
                            src={`${
                              import.meta.env.VITE_BASE_URL
                            }/uploads/img/profile/${user.avatar}`}
                            alt={user.username}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-indigo-600 font-medium text-sm">
                            {user.username.charAt(0).toUpperCase()}
                          </span>
                        )}
                      </div>

                      <span className="font-medium text-sm hidden sm:inline-block">
                        {user.username}
                      </span>
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          dropdownOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {dropdownOpen && (
                      <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-100 rounded-xl shadow-xl z-10 overflow-hidden">
                        {/* Header Dropdown dengan Avatar Besar */}
                        <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-indigo-50 to-purple-50 flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center overflow-hidden border-2 border-white shadow">
                            {user.avatar ? (
                              <img
                                src={`${
                                  import.meta.env.VITE_BASE_URL
                                }/uploads/img/profile/${user.avatar}`}
                                alt={user.username}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <span className="text-indigo-600 font-medium">
                                {user.username.charAt(0).toUpperCase()}
                              </span>
                            )}
                          </div>
                          <div>
                            <p className="font-medium text-indigo-900">
                              {user.username}
                            </p>
                            <p className="text-xs text-indigo-600 truncate">
                              {user.email}
                            </p>
                          </div>
                        </div>

                        <a
                          href="/profile"
                          className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                        >
                          <svg
                            className="w-5 h-5 mr-2 text-indigo-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                          My Profile
                        </a>
                        <a
                          href="/settings"
                          className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                        >
                          <svg
                            className="w-5 h-5 mr-2 text-indigo-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          Settings
                        </a>
                        <button
                          onClick={handleLogout}
                          className="flex items-center w-full px-4 py-3 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors border-t border-gray-100"
                        >
                          <svg
                            className="w-5 h-5 mr-2 text-indigo-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                            />
                          </svg>
                          Sign Out
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex gap-3">
                    <Link
                      to="/auth"
                      className="px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-indigo-500/30 transform hover:-translate-y-0.5 flex items-center gap-2"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                        />
                      </svg>
                      Login
                    </Link>
                  </div>
                )}
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
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div
              className={`md:hidden mt-4 py-4 rounded-2xl backdrop-blur-sm ${
                darkMode ? "bg-gray-800/80" : "bg-white/90"
              } shadow-lg`}
            >
              {/* Navigation Links */}
              <div className="flex flex-col space-y-2 px-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`flex items-center space-x-3 py-3 px-4 rounded-xl transition-all duration-200 ${
                      darkMode
                        ? "text-gray-200 hover:bg-gray-700/50"
                        : "text-gray-800 hover:bg-gray-100"
                    } ${
                      location.pathname === link.path
                        ? darkMode
                          ? "bg-gray-700/50"
                          : "bg-gray-100"
                        : ""
                    }`}
                  >
                    <span
                      className={`p-2 rounded-lg ${
                        darkMode
                          ? "bg-gray-700 text-indigo-400"
                          : "bg-gray-100 text-indigo-600"
                      } ${
                        location.pathname === link.path
                          ? darkMode
                            ? "bg-indigo-600 text-white"
                            : "bg-indigo-100 text-indigo-700"
                          : ""
                      }`}
                    >
                      {link.icon}
                    </span>
                    <span className="font-medium flex-1">{link.name}</span>
                    {location.pathname === link.path && (
                      <span
                        className={`w-1.5 h-6 rounded-full ${
                          darkMode ? "bg-indigo-400" : "bg-indigo-600"
                        }`}
                      ></span>
                    )}
                  </Link>
                ))}
              </div>

              {/* Auth Buttons */}
              <div className="mt-6 px-3">
                {user ? (
                  <div className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center overflow-hidden border-2 border-white shadow">
                      {user.avatar ? (
                        <img
                          src={`${
                            import.meta.env.VITE_BASE_URL
                          }/uploads/img/profile/${user.avatar}`}
                          alt={user.username}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span
                          className={`font-medium ${
                            darkMode ? "text-indigo-300" : "text-indigo-600"
                          }`}
                        >
                          {user.username.charAt(0).toUpperCase()}
                        </span>
                      )}
                    </div>
                    <div className="flex-1">
                      <p
                        className={`font-medium ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {user.username}
                      </p>
                      <p
                        className={`text-xs ${
                          darkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        View profile
                      </p>
                    </div>
                    <button
                      onClick={handleLogout}
                      className={`p-2 rounded-full ${
                        darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                      }`}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                    </button>
                  </div>
                ) : (
                  <div className="">
                    <Link
                      to="/auth"
                      className="py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-md"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                        />
                      </svg>
                      <span>Login</span>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
