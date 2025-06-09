import { useState } from "react";
import { Sun, Moon, BookOpen } from "lucide-react";
import FormLogin from "../../components/Fragments/FormLogin";
import FormRegister from "../../components/Fragments/FormRegister";
import { useTheme } from "../../context/ThemeContext";
import NotificationCard from "../../components/Fragments/NotificationCard";
import axios from "axios";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { darkMode, toggleTheme } = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [notification, setNotification] = useState(null);
  const [formRegister, setFormRegister] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });
  const [formLogin, setFormLogin] = useState({ email: "", password: "" });

  // Handle form change
  const handleChange = (e, formType = "register") => {
    const { name, value, type, checked } = e.target;
    const updateValue = type === "checkbox" ? checked : value;

    if (formType === "register") {
      setFormRegister((prev) => ({ ...prev, [name]: updateValue }));
    } else if (formType === "login") {
      setFormLogin((prev) => ({ ...prev, [name]: updateValue }));
    }
  };

  // Handle form submit Register
  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    setErrors({});
    setSuccess("");

    try {
      const res = await axios.post("/api/auth/register", formRegister);

      // set notification
      setNotification({
        type: "success",
        message: res.data.message,
      });

      setFormRegister({
        name: "",
        username: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        terms: false,
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

  // Handle form submit Login
  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    setErrors({});
    setSuccess("");

    try {
      const res = await axios.post("/api/auth/login", formLogin, {
        withCredentials: true,
      });
      const { redirect, message } = res.data;

      // set notification
      setNotification({
        type: "success",
        message,
      });

      setTimeout(() => {
        window.location.href = redirect;
      }, 2500);
      
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
      {notification && (
        <NotificationCard
          type={notification.type}
          message={notification.message}
          onClose={() => setNotification(null)}
        />
      )}

      <div
        className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
          darkMode ? "dark bg-gray-900" : "bg-gray-50"
        }`}
      >
        {/* Dark mode toggle */}
        <button
          onClick={toggleTheme}
          className={`fixed top-6 right-6 p-2 rounded-full transition-all duration-300 ${
            darkMode
              ? "bg-gray-700 text-yellow-300 hover:bg-gray-600"
              : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
          }`}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Main container */}
        <div
          className={`w-full max-w-md mx-4 transition-all duration-500 ${
            isLogin ? "block" : "hidden"
          }`}
        >
          {/* Login Form */}
          <div
            className={`rounded-xl shadow-lg overflow-hidden transition-all duration-500 ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div
              className={`p-6 ${
                darkMode ? "bg-gray-900" : "bg-gray-800"
              } text-white`}
            >
              <div className="flex items-center justify-center mb-2">
                <BookOpen size={28} className="mr-2" />
                <h1 className="text-2xl font-bold">BlogAuth</h1>
              </div>
              <p className="text-center text-gray-300">
                Sign in to your account
              </p>
            </div>

            <FormLogin
              darkMode={darkMode}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              setIsLogin={setIsLogin}
              success={success}
              errors={errors}
              handleSubmitLogin={handleSubmitLogin}
              formLogin={formLogin}
              handleChange={handleChange}
            />
          </div>
        </div>

        {/* Register Form */}
        <div
          className={`w-full max-w-md mx-4 transition-all duration-500 ${
            !isLogin ? "block" : "hidden"
          }`}
        >
          <div
            className={`rounded-xl shadow-lg overflow-hidden transition-all duration-500 ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div
              className={`p-6 ${
                darkMode ? "bg-gray-900" : "bg-gray-800"
              } text-white`}
            >
              <div className="flex items-center justify-center mb-2">
                <BookOpen size={28} className="mr-2" />
                <h1 className="text-2xl font-bold">BlogAuth</h1>
              </div>
              <p className="text-center text-gray-300">Create a new account</p>
            </div>

            <FormRegister
              darkMode={darkMode}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              setIsLogin={setIsLogin}
              errors={errors}
              formRegister={formRegister}
              handleChange={handleChange}
              handleSubmitRegister={handleSubmitRegister}
              setFormRegister={setFormRegister}
              showConfirmPassword={showConfirmPassword}
              setShowConfirmPassword={setShowConfirmPassword}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
