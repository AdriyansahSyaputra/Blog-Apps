import ActivityFeed from "../../components/Layouts/dashboard/Home/ActivityFeed";
import QuickActions from "../../components/Layouts/dashboard/Home/QuickActions";
import RecentPosts from "../../components/Layouts/dashboard/Home/RecentPosts";
import StatsCards from "../../components/Layouts/dashboard/Home/StatsCards";
import Sidebar from "../../components/Templates/dashboard/Sidebar";
import Topbar from "../../components/Templates/dashboard/Topbar";
import { useTheme } from "../../context/ThemeContext";
import { useState } from "react";

const HomeDashboardPage = () => {
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
            sidebarOpen ? "lg:ml-64" : "ml-0 lg:ml-20"
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
            {/* Welcome Section */}
            <div className="mb-8">
              <h1
                className={`text-3xl font-bold mb-2 ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                Welcome back, Admin! 👋
              </h1>
              <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                Here's what's happening with your blog today.
              </p>
            </div>

            {/* Stats Cards */}
            <StatsCards darkMode={darkMode} />

            {/* Content Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              {/* Recent Posts */}
              <div className="xl:col-span-2">
                <RecentPosts darkMode={darkMode} />
              </div>

              {/* Sidebar Content */}
              <div className="space-y-6">
                <QuickActions darkMode={darkMode} />
                <ActivityFeed darkMode={darkMode} />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default HomeDashboardPage;
