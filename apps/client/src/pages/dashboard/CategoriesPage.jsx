import Sidebar from "../../components/Templates/dashboard/Sidebar";
import Topbar from "../../components/Templates/dashboard/Topbar";
import { useTheme } from "../../context/ThemeContext";
import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import CategoryModal from "../../components/Layouts/dashboard/Category/CategoryModal";
import { Tag, Hash, TrendingUp, Archive } from "lucide-react";
import CategoryCard from "../../components/Layouts/dashboard/Category/CategoryCard";
import StatsCard from "../../components/Layouts/dashboard/Category/StatsCard";
import axios from "axios";
import NotificationCard from "../../components/Fragments/NotificationCard";
import CategoryHeader from "../../components/Layouts/dashboard/Category/CategoryHeader";
import SearchViewControl from "../../components/Layouts/dashboard/Category/SearchViewControl";

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

  const fetchCategories = async () => {
    try {
      const response = await axios.get("/api/dashboard/categories", {
        withCredentials: true,
      });
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  // Load semua data category saat pertama kali
  useEffect(() => {
    fetchCategories();
  }, []);

  // Create Category
  const handleCreateCategory = async (data) => {
    try {
      await axios.post("/api/dashboard/categories/new", data, {
        withCredentials: true,
      });

      setNotification({
        type: "success",
        message: "Category added successfully.",
      });

      await fetchCategories();

      setFormData({
        name: "",
        description: "",
        color: "",
      });
      setShowModal(false);
    } catch (error) {
      console.error("Error adding category:", error);
      setNotification({
        type: "error",
        message: "Error adding category.",
      });
    }
  };

  // Handle Update Category
  const handleUpdateCataegory = async (data) => {
    try {
      await axios.put(
        `/api/dashboard/categories/${editingCategory._id}`,
        data,
        {
          withCredentials: true,
        }
      );

      await fetchCategories();

      setNotification({
        type: "success",
        message: "Category updated successfully.",
      });

      setEditingCategory(null);
      setFormData({
        name: "",
        description: "",
        color: "",
      });
      setShowModal(false);
    } catch (err) {
      console.error("Error updating category:", err);
      setNotification({
        type: "error",
        message: "Error updating category.",
      });
    }
  };

  const handleDeleteCategory = async (category) => {
    try {
      if (
        window.confirm(`Are you sure you want to delete "${category.name}"?`)
      ) {
        axios.delete(`/api/dashboard/categories/${category._id}`, {
          withCredentials: true,
        });

        await fetchCategories();

        setNotification({
          type: "success",
          message: "Category deleted successfully.",
        });
      }
    } catch (err) {
      console.error("Error deleting category:", err);
      setNotification({
        type: "error",
        message: "Error deleting category.",
      });
    }
  };

  // Edit Category
  const handleEditCategory = (category) => {
    setEditingCategory(category);
    setFormData({
      name: category.name,
      description: category.description,
      color: category.color,
    });
    setShowModal(true);
  };

  // Save Category
  const handleSaveCategory = (data) => {
    if (editingCategory) {
      handleUpdateCataegory({ ...data, _id: editingCategory._id });
    } else {
      handleCreateCategory(data);
    }
  };

  // Filter categories based on search
  const filteredCategories = categories.filter(
    (category) =>
      category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            <CategoryHeader
              darkMode={darkMode}
              setShowModal={setShowModal}
              setEditingCategory={setEditingCategory}
            />

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <StatsCard key={index} {...stat} darkMode={darkMode} />
              ))}
            </div>

            {/* Search and View Controls */}
            <SearchViewControl
              darkMode={darkMode}
              setSearchQuery={setSearchQuery}
              searchQuery={searchQuery}
              setViewMode={setViewMode}
              viewMode={viewMode}
            />

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
            />
          </main>
        </div>
      </div>
    </>
  );
};

export default CategoriesPage;
