import {
  Home,
  FileText,
  Users,
  MessageSquare,
  BarChart3,
  Image,
  Tag,
  Settings,
  BookOpen,
  X,
  User,
} from "lucide-react";

const Sidebar = ({
  darkMode,
  sidebarOpen,
  setSidebarOpen,
  activeMenu,
  setActiveMenu,
}) => {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Home, badge: null },
    { id: "posts", label: "Posts", icon: FileText, badge: "24" },
    { id: "users", label: "Users", icon: Users, badge: null },
    { id: "comments", label: "Comments", icon: MessageSquare, badge: "8" },
    { id: "analytics", label: "Analytics", icon: BarChart3, badge: null },
    { id: "media", label: "Media", icon: Image, badge: null },
    { id: "categories", label: "Categories", icon: Tag, badge: null },
    { id: "settings", label: "Settings", icon: Settings, badge: null },
  ];

  return (
    <>
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div
          className={`h-full backdrop-blur-xl border-r transition-all duration-300 ${
            darkMode
              ? "bg-gray-900/80 border-gray-700/50"
              : "bg-white/80 border-gray-200/50"
          }`}
        >
          {/* Logo */}
          <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200/20">
            <div className="flex items-center space-x-3">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600`}
              >
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1
                  className={`text-xl font-bold ${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  BlogAdmin
                </h1>
                <p
                  className={`text-xs ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Content Management
                </p>
              </div>
            </div>

            {/* Hamburger Menu for Mobile */}
            <button
              onClick={() => setSidebarOpen(false)}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                darkMode
                  ? "hover:bg-gray-800 text-gray-300"
                  : "hover:bg-gray-100 text-gray-600"
              }`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeMenu === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveMenu(item.id)}
                  className={`w-full flex items-center px-4 py-3 text-left rounded-xl transition-all duration-200 group ${
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
                    className={`w-5 h-5 mr-3 transition-transform duration-200 ${
                      isActive ? "scale-110" : "group-hover:scale-105"
                    }`}
                  />
                  <span className="font-medium">{item.label}</span>
                  {item.badge && (
                    <span
                      className={`ml-auto px-2 py-1 text-xs rounded-full ${
                        isActive
                          ? "bg-white/20 text-white"
                          : darkMode
                          ? "bg-gray-700 text-gray-300"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* User Profile - Positioned at bottom with separator */}
          <div className="mt-auto border-t border-gray-200/20 bottom-0">
            <div className="p-4">
              <div
                className={`flex items-center p-3 rounded-xl transition-all duration-200 ${
                  darkMode ? "hover:bg-gray-800/50" : "hover:bg-gray-100/50"
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div className="ml-3">
                  <p
                    className={`text-sm font-medium ${
                      darkMode ? "text-white" : "text-gray-800"
                    }`}
                  >
                    Admin User
                  </p>
                  <p
                    className={`text-xs ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    admin@blog.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
