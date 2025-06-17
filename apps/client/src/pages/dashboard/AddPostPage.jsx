import Sidebar from "../../components/Templates/dashboard/Sidebar";
import Topbar from "../../components/Templates/dashboard/Topbar";
import { useTheme } from "../../context/ThemeContext";
import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import { Save, Eye, Calendar, FileText, Check } from "lucide-react";
import FormAddPost from "../../components/Fragments/FormAddPost";
import NotificationCard from "../../components/Fragments/NotificationCard";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddPostPage = () => {
  const { darkMode, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [categories, setCategories] = useState([]);
  const [notification, setNotification] = useState(null);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    slugManuallyEdited: false,
    content: "",
    excerpt: "",
    status: "draft",
    publishDate: "",
    publishTime: "",
    featuredImage: null,
    categories: [],
    tags: [],
  });

  const [tagInput, setTagInput] = useState("");
  const [previewImage, setPreviewImage] = useState(null);

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

  const statusOptions = [
    { value: "draft", label: "Draft", icon: FileText, color: "text-gray-500" },
    {
      value: "published",
      label: "Publish Now",
      icon: Check,
      color: "text-green-500",
    },
    {
      value: "scheduled",
      label: "Schedule",
      icon: Calendar,
      color: "text-blue-500",
    },
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => {
      const updated = {
        ...prev,
        [field]: value,
      };

      if (field === "title" && (!prev.slugManuallyEdited || !prev.slug)) {
        const slug = value
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");

        updated.slug = slug;
      }

      return updated;
    });
  };

  const handleCategoryToggle = (categoryId) => {
    setFormData((prev) => ({
      ...prev,
      categories: prev.categories.includes(categoryId)
        ? prev.categories.filter((id) => id !== categoryId)
        : [...prev.categories, categoryId],
    }));
  };

  const handleAddTag = (e) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      if (!formData.tags.includes(tagInput.trim())) {
        setFormData((prev) => ({
          ...prev,
          tags: [...prev.tags, tagInput.trim()],
        }));
      }
      setTagInput("");
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        featuredImage: file,
      }));

      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    setErrors({});
    try {
      await axios.post("/api/dashboard/posts/new", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      setNotification({
        type: "success",
        message: "Post added successfully.",
      });

      // Set notifikasi lalu redirect
      setTimeout(() => {
        navigate("/dashboard/posts");
      }, 2000);
    } catch (err) {
      let errorMessage = "Network error. Please check your connection.";
      let fieldErrors = {};

      if (err.response) {
        // Error dari server (4xx/5xx)
        if (err.response.data?.errors) {
          fieldErrors = err.response.data.errors;
          errorMessage = "Please fix the form errors";
        } else {
          errorMessage = err.response.data?.message || errorMessage;
        }
      } else if (err.request) {
        // Request dibuat tapi tidak ada response (timeout, dll)
        errorMessage = "Server is not responding. Please try later.";
      }

      setErrors(fieldErrors);
      setNotification({ type: "error", message: errorMessage });
    }
  };

  return (
    <>
      <Helmet title="Dashboard | Add Post" />

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
            <div className="min-h-screen p-4 sm:p-6">
              <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h1
                        className={`text-3xl font-bold ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        Create New Post
                      </h1>
                      <p
                        className={`mt-2 ${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        Write and publish your blog post
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        type="button"
                        className={`flex items-center justify-center px-4 py-2 border rounded-xl transition-colors duration-200 ${
                          darkMode
                            ? "border-gray-700 text-gray-300 hover:bg-gray-800"
                            : "border-gray-300 text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Preview
                      </button>
                      <button
                        onClick={handleSubmit}
                        className="flex items-center justify-center px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors duration-200"
                      >
                        <Save className="w-4 h-4 mr-2" />
                        Save Post
                      </button>
                    </div>
                  </div>
                </div>

                <FormAddPost
                  darkMode={darkMode}
                  formData={formData}
                  handleInputChange={handleInputChange}
                  statusOptions={statusOptions}
                  previewImage={previewImage}
                  setPreviewImage={setPreviewImage}
                  setFormData={setFormData}
                  handleImageUpload={handleImageUpload}
                  handleAddTag={handleAddTag}
                  tagInput={tagInput}
                  categories={categories}
                  handleCategoryToggle={handleCategoryToggle}
                  setTagInput={setTagInput}
                  handleRemoveTag={handleRemoveTag}
                  errors={errors}
                />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default AddPostPage;
