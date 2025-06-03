import Index from "../../components/Layouts/dashboard/Post/Index";
import Sidebar from "../../components/Templates/dashboard/Sidebar";
import Topbar from "../../components/Templates/dashboard/Topbar";
import { useTheme } from "../../context/ThemeContext";
import { useState } from "react";

const Post = () => {
    const { darkMode, toggleTheme } = useTheme();
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [activeMenu, setActiveMenu] = useState("dashboard");

    return (
      <>
        <div
          className={`min-h-screen transition-all duration-300 ${
            darkMode
              ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
              : "bg-gradient-to-br from-blue-50 via-white to-purple-50"
          }`}
        >
          <Sidebar
            darkMode={darkMode}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
          />

          {/* Main Content */}
        <div
          className={`transition-all duration-300 ${
            sidebarOpen ? "lg:ml-64" : "ml-0"
          }`}
        >
          {/* Topbar */}
          <Topbar
            darkMode={darkMode}
            toggleTheme={toggleTheme}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
            {/* Dashboard Content */}
          <main className="p-6">
            <Index darkMode={darkMode} />
          </main>
          </div>
        </div>
      </>
    );
}

export default Post