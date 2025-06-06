import { BookOpen, User } from "lucide-react";
import { Link } from "react-router-dom";

const MiniSidebar = ({ darkMode, sidebarOpen, setSidebarOpen, menuItems, isMenuActive, handleMenuClick }) => {
  return (
    <>
      <div
        className={`fixed inset-y-0 left-0 z-40 w-20 transform transition-transform duration-300 ease-in-out hidden lg:block ${
          !sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div
          className={`h-full backdrop-blur-xl border-r transition-all duration-300 flex flex-col overflow-hidden ${
            darkMode
              ? "bg-gray-900/90 border-gray-700/50"
              : "bg-white/90 border-gray-200/50"
          }`}
        >
          {/* Logo - Mini */}
          <div className="flex items-center justify-center h-16 border-b border-gray-200/20 shrink-0">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 cursor-pointer`}
              onClick={() => setSidebarOpen(true)}
            >
              <BookOpen className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Navigation - Mini Icons */}
          <nav className="flex-1 px-3 py-6 space-y-2 overflow-y-auto overflow-x-hidden">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = isMenuActive(item.href);

              return (
                <div key={item.id} className="relative group">
                  <Link
                    to={item.href}
                    onClick={() => handleMenuClick(item.id)}
                    className={`w-full flex items-center justify-center p-3 rounded-xl transition-all duration-200 relative ${
                      isActive
                        ? darkMode
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                          : "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                        : darkMode
                        ? "hover:bg-gray-800/50 text-gray-300 hover:text-white"
                        : "hover:bg-gray-100/50 text-gray-600 hover:text-gray-800"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 transition-transform duration-200 ${
                        isActive ? "scale-110" : "group-hover:scale-105"
                      }`}
                    />
                    {item.badge && (
                      <span
                        className={`absolute -top-1 -right-1 w-5 h-5 rounded-full text-xs flex items-center justify-center ${
                          isActive
                            ? "bg-white/20 text-white"
                            : darkMode
                            ? "bg-red-500 text-white"
                            : "bg-red-500 text-white"
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </Link>

                  {/* Tooltip - Diubah posisinya agar tidak menyebabkan overflow */}
                  <div
                    className={`absolute left-full top-0 ml-2 px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50 whitespace-nowrap ${
                      darkMode
                        ? "bg-gray-800 text-white border border-gray-700"
                        : "bg-white text-gray-800 border border-gray-200 shadow-lg"
                    }`}
                    style={{ transform: "translateY(0)" }}
                  >
                    {item.label}
                    <div
                      className={`absolute right-full top-3 border-4 border-transparent ${
                        darkMode ? "border-r-gray-800" : "border-r-white"
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </nav>

          {/* User Profile - Mini */}
          <div className="border-t border-gray-200/20 mt-auto shrink-0">
            <div className="p-3">
              <div
                className={`flex items-center justify-center p-3 rounded-xl transition-all duration-200 cursor-pointer group relative ${
                  darkMode ? "hover:bg-gray-800/50" : "hover:bg-gray-100/50"
                }`}
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>

                {/* User Tooltip - Diubah posisinya */}
                <div
                  className={`absolute left-full bottom-0 ml-2 px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50 whitespace-nowrap ${
                    darkMode
                      ? "bg-gray-800 text-white border border-gray-700"
                      : "bg-white text-gray-800 border border-gray-200 shadow-lg"
                  }`}
                >
                  <div className="font-medium">Admin User</div>
                  <div
                    className={`text-xs ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    admin@blog.com
                  </div>
                  <div
                    className={`absolute right-full top-3 border-4 border-transparent ${
                      darkMode ? "border-r-gray-800" : "border-r-white"
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiniSidebar;
