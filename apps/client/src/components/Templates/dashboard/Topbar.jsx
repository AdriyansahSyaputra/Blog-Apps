import { useState, useEffect } from "react";
import { Sun, Moon, Menu, Search, Bell, ChevronDown } from "lucide-react";
import NotificationDropdown from "./NotificationDropdown";
import ProfileDropdown from "./ProfileDropdown";

const Topbar = ({ darkMode, toggleTheme, sidebarOpen, setSidebarOpen }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".notification-dropdown")) {
        setShowNotifications(false);
      }
      if (!event.target.closest(".profile-dropdown")) {
        setShowProfileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 backdrop-blur-xl border-b transition-all duration-300 ${
        darkMode
          ? "bg-gray-900/80 border-gray-700/50"
          : "bg-white/80 border-gray-200/50"
      }`}
    >
      <div className="flex items-center justify-between h-16 px-6">
        <div className="flex items-center space-x-4">
          {/* Hamburger Menu */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className={`p-2 rounded-lg transition-colors duration-200 lg:hidden ${
              darkMode
                ? "hover:bg-gray-800 text-gray-300"
                : "hover:bg-gray-100 text-gray-600"
            }`}
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Search Bar */}
          <div className="relative">
            <Search
              className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            />
            <input
              type="text"
              placeholder="Search posts, users..."
              className={`pl-10 pr-4 py-2 w-80 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
                darkMode
                  ? "bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
                  : "bg-gray-50/50 border-gray-200 text-gray-800 placeholder-gray-500"
              }`}
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-all duration-200 ${
              darkMode
                ? "hover:bg-gray-800 text-gray-300"
                : "hover:bg-gray-100 text-gray-600"
            }`}
          >
            {darkMode ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          {/* Notifications */}
          <div className="relative notification-dropdown">
            <button
              onClick={() => {
                setShowNotifications(!showNotifications);
                setShowProfileMenu(false);
              }}
              className={`relative p-2 rounded-lg transition-colors duration-200 ${
                darkMode
                  ? "hover:bg-gray-800 text-gray-300"
                  : "hover:bg-gray-100 text-gray-600"
              }`}
            >
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
            </button>
            <NotificationDropdown
              darkMode={darkMode}
              isOpen={showNotifications}
              onClose={() => setShowNotifications(false)}
            />
          </div>

          {/* Profile Menu */}
          <div className="relative profile-dropdown">
            <button
              onClick={() => {
                setShowProfileMenu(!showProfileMenu);
                setShowNotifications(false);
              }}
              className={`flex items-center space-x-2 p-2 rounded-lg transition-colors duration-200 ${
                darkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"
              }`}
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-red-500"></div>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  showProfileMenu ? "rotate-180" : ""
                } ${darkMode ? "text-gray-300" : "text-gray-600"}`}
              />
            </button>
            <ProfileDropdown
              darkMode={darkMode}
              isOpen={showProfileMenu}
              onClose={() => setShowProfileMenu(false)}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;