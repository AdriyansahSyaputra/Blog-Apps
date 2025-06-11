import Sidebar from "../../components/Templates/dashboard/Sidebar";
import Topbar from "../../components/Templates/dashboard/Topbar";
import { useTheme } from "../../context/ThemeContext";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import CategoryModal from "../../components/Layouts/dashboard/Category/CategoryModal";
import {
  Grid3X3,
  List,
  Plus,
  Search,
  Tag,
  Hash,
  TrendingUp,
  Archive,
} from "lucide-react";
import CategoryCard from "../../components/Layouts/dashboard/Category/CategoryCard";
import StatsCard from "../../components/Layouts/dashboard/Category/StatsCard";
import axios from "axios";
import NotificationCard from "../../components/Fragments/NotificationCard";

const CategoriesPage = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [showModal, setShowModal] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [categories, setCategories] = useState([]);
  const [notification, setNotification] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    description: "",
    color: "",
  });

  // Sample data
  const stats = [
    {
      icon: Tag,
      title: "Total Pagge",
      value: "24",
      change: 15,
      color: "bg-gradient-to-r from-blue-500 to-purple-600",
    },
    {
      icon: Hash,
      title: "Active Categories",
      value: "18",
      change: 8,
      color: "bg-gradient-to-r from-green-500 to-teal-600",
    },
    {
      icon: TrendingUp,
      title: "Trending",
      value: "6",
      change: 25,
      color: "bg-gradient-to-r from-orange-500 to-red-600",
    },
    {
      icon: Archive,
      title: "Archived",
      value: "3",
      change: -12,
      color: "bg-gradient-to-r from-gray-500 to-gray-600",
    },
  ];

  const colors = [
    "#3B82F6",
    "#8B5CF6",
    "#10B981",
    "#F59E0B",
    "#EF4444",
    "#EC4899",
    "#06B6D4",
    "#84CC16",
  ];

  // Create Category
  const handleCreateCategory = async (e) => {
    e.preventDefault();

    try {
      await axios.get("/api/dashboard/users/new", formData, {
        withCredentials: true,
      });

      setNotification({
        type: "success",
        message: "User added successfully.",
      });

      setFormData({
        name: "",
        slug: "",
        description: "",
        color: "",
      });
    } catch (error) {
      console.error("Failed to add user:", error);
      setNotification({
        type: "error",
        message: "Failed to add user.",
      });
    }
  };

  // Filter categories based on search
  const filteredCategories = categories.filter(
    (category) =>
      category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.subcategories.some((sub) =>
        sub.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  const handleEditCategory = (category) => {
    setEditingCategory(category);
    setShowModal(true);
  };

  const handleDeleteCategory = (category) => {
    if (window.confirm(`Are you sure you want to delete "${category.name}"?`)) {
      console.log("Delete category:", category.id);
    }
  };

  const handleSaveCategory = (formData) => {
    console.log("Save category:", formData);
  };

  return (
    <>
      <Helmet title="Dashboard | Categories" />

      {notification && (
        <NotificationCard
          type={notification.type}
          message={notification.message}
          onClose={() => setNotification(null)}
        />
      )}

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

          <main className="p-6 space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1
                  className={`text-3xl font-bold ${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  Categories Management
                </h1>
                <p
                  className={`text-sm mt-1 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Organize and manage your blog categories
                </p>
              </div>

              <button
                onClick={() => {
                  setEditingCategory(null);
                  setShowModal(true);
                }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-200 flex items-center space-x-2"
              >
                <Plus className="w-5 h-5" />
                <span>New Category</span>
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <StatsCard key={index} {...stat} darkMode={darkMode} />
              ))}
            </div>

            {/* Search and View Controls */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search
                  className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                />
                <input
                  type="text"
                  placeholder="Search categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border backdrop-blur-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
                    darkMode
                      ? "bg-gray-900/50 border-gray-700/50 text-white placeholder-gray-400"
                      : "bg-white/50 border-gray-200/50 text-gray-800 placeholder-gray-500"
                  }`}
                />
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-3 rounded-xl transition-all duration-200 ${
                    viewMode === "grid"
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                      : darkMode
                      ? "bg-gray-900/50 border border-gray-700/50 text-gray-400 hover:text-white"
                      : "bg-white/50 border border-gray-200/50 text-gray-600 hover:text-gray-800"
                  }`}
                >
                  <Grid3X3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-3 rounded-xl transition-all duration-200 ${
                    viewMode === "list"
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                      : darkMode
                      ? "bg-gray-900/50 border border-gray-700/50 text-gray-400 hover:text-white"
                      : "bg-white/50 border border-gray-200/50 text-gray-600 hover:text-gray-800"
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Results Count */}
            <div
              className={`text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Showing {filteredCategories.length} of {categories.length}{" "}
              categories
            </div>

            {/* Categories Grid/List */}
            <div
              className={`grid gap-6 ${
                viewMode === "grid"
                  ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
                  : "grid-cols-1"
              }`}
            >
              {filteredCategories.map((category) => (
                <CategoryCard
                  key={category.id}
                  category={category}
                  darkMode={darkMode}
                  onEdit={handleEditCategory}
                  onDelete={handleDeleteCategory}
                />
              ))}
            </div>

            {/* Empty State */}
            {filteredCategories.length === 0 && (
              <div
                className={`text-center py-12 ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                <Tag className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <h3 className="text-lg font-medium mb-2">
                  No categories found
                </h3>
                <p className="text-sm">Try adjusting your search criteria</p>
              </div>
            )}

            {/* Category Modal */}
            <CategoryModal
              darkMode={darkMode}
              isOpen={showModal}
              onClose={() => setShowModal(false)}
              category={editingCategory}
              onSave={handleSaveCategory}
              colors={colors}
              formData={formData}
              setFormData={setFormData}
              handleCreateCategory={handleCreateCategory}
            />
          </main>
        </div>
      </div>
    </>
  );
};

export default CategoriesPage;
