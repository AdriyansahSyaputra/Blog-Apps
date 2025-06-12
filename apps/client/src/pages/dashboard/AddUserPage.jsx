import Sidebar from "../../components/Templates/dashboard/Sidebar";
import Topbar from "../../components/Templates/dashboard/Topbar";
import { useTheme } from "../../context/ThemeContext";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import FormAddUser from "../../components/Fragments/FormAddUser";
import axios from "axios";
import NotificationCard from "../../components/Fragments/NotificationCard";
import { useNavigate } from "react-router-dom";

const AddUserPage = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const { darkMode, toggleTheme } = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [notification, setNotification] = useState(null);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    birthday: "",
    confirmPassword: "",
    role: "",
    status: "",
    avatar: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Preview image
      const reader = new FileReader();
      reader.onload = (e) => setSelectedImage(e.target.result);
      reader.readAsDataURL(file);

      // Simpan ke formData
      setFormData((prev) => ({
        ...prev,
        avatar: file,
      }));
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
    setFormData((prev) => ({
      ...prev,
      avatar: null,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/dashboard/users/new", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      setNotification({
        type: "success",
        message: "User added successfully.",
      });

      // Set notifikasi lalu redirect
      setTimeout(() => {
        navigate("/dashboard/users");
      }, 2000);

      setFormData({
        name: "",
        username: "",
        email: "",
        phone: "",
        password: "",
        birthday: "",
        confirmPassword: "",
        role: "",
        status: "",
        avatar: null,
      });
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
            <div
              className={`min-h-screen transition-colors duration-300 ${
                darkMode ? "bg-gray-900" : "bg-gray-50"
              }`}
            >
              {/* Header */}
              <div
                className={`sticky top-0 z-30 backdrop-blur-xl border-b transition-all duration-300 ${
                  darkMode
                    ? "bg-gray-900/80 border-gray-700/50"
                    : "bg-white/80 border-gray-200/50"
                }`}
              >
                <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => window.history.back()}
                      className={`p-2 rounded-lg transition-colors duration-200 ${
                        darkMode
                          ? "hover:bg-gray-800 text-gray-300"
                          : "hover:bg-gray-100 text-gray-600"
                      }`}
                    >
                      <ArrowLeft className="w-5 h-5" />
                    </button>
                    <div>
                      <h1
                        className={`text-xl font-semibold ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        Add New User
                      </h1>
                      <p
                        className={`text-sm ${
                          darkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        Create a new user account
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
                <FormAddUser
                  darkMode={darkMode}
                  selectedImage={selectedImage}
                  removeImage={removeImage}
                  setShowConfirmPassword={setShowConfirmPassword}
                  handleImageUpload={handleImageUpload}
                  handleInputChange={handleInputChange}
                  formData={formData}
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                  showConfirmPassword={showConfirmPassword}
                  handleSubmit={handleSubmit}
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

export default AddUserPage;
