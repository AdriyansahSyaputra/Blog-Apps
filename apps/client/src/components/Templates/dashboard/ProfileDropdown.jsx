import { UserCircle, Settings, LogOut } from "lucide-react";
import axios from "axios";

const ProfileDropdown = ({ darkMode, isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleLogout = () => {
    axios.post("/api/auth/logout").then(() => {
      window.location.href = "/auth";
    });

    onClose();
  };

  return (
    <div
      className={`absolute right-0 mt-2 w-56 rounded-xl shadow-lg border backdrop-blur-xl z-50 ${
        darkMode
          ? "bg-gray-800/90 border-gray-700/50"
          : "bg-white/90 border-gray-200/50"
      }`}
    >
      <div className="py-2">
        <button
          className={`w-full flex items-center px-4 py-3 text-left transition-colors duration-200 ${
            darkMode
              ? "hover:bg-gray-700/30 text-gray-300"
              : "hover:bg-gray-50/50 text-gray-700"
          }`}
        >
          <UserCircle className="w-5 h-5 mr-3" />
          <span className="font-medium">Profile</span>
        </button>

        <button
          className={`w-full flex items-center px-4 py-3 text-left transition-colors duration-200 ${
            darkMode
              ? "hover:bg-gray-700/30 text-gray-300"
              : "hover:bg-gray-50/50 text-gray-700"
          }`}
        >
          <Settings className="w-5 h-5 mr-3" />
          <span className="font-medium">Settings</span>
        </button>

        <div className="my-2 border-t border-gray-200/20"></div>

        <button
          onClick={handleLogout}
          className={`w-full flex items-center px-4 py-3 text-left transition-colors duration-200 ${
            darkMode
              ? "hover:bg-red-900/20 text-red-400 hover:text-red-300"
              : "hover:bg-red-50/50 text-red-600 hover:text-red-700"
          }`}
        >
          <LogOut className="w-5 h-5 mr-3" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileDropdown;
