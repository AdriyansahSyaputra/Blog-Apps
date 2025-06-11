import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Templates/client/Navbar";
import Footer from "../../components/Templates/client/Footer";
import { useTheme } from "../../context/ThemeContext";
import FormAuthorRequest from "../../components/Fragments/FormAuthorRequest";
import axios from "axios";
import NotificationCard from "../../components/Fragments/NotificationCard";

const AuthorRequestPage = () => {
  const { darkMode } = useTheme();
  const [user, setUser] = useState({ name: "" });
  const [notification, setNotification] = useState(null);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    job: "",
    topics: [],
    portfolio: "",
    socialLinks: {
      twitter: "",
      instagram: "",
      facebook: "",
      medium: "",
    },
    reason: "",
  });

  const topics = [
    "technology",
    "design",
    "business",
    "health",
    "science",
    "travel",
    "food",
    "lifestyle",
  ];

  // Ambil data user sekarang
  useEffect(() => {
    axios
      .get("/api/client/me", { withCredentials: true })
      .then((res) => setUser(res.data))
      .catch((err) => console.log("Gagal mengambil data user", err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name in formData.socialLinks) {
      // Jika field termasuk dalam socialLinks
      setFormData((prev) => ({
        ...prev,
        socialLinks: {
          ...prev.socialLinks,
          [name]: value,
        },
      }));
    } else {
      // Untuk field langsung
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleCheckboxChange = (topic) => {
    setFormData((prev) => {
      if (prev.topics.includes(topic)) {
        return { ...prev, topics: prev.topics.filter((t) => t !== topic) };
      } else {
        return { ...prev, topics: [...prev.topics, topic] };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/client/request-author", formData, {
        withCredentials: true,
      });

      setNotification({
        type: "success",
        message: "Author request submitted successfully.",
      });

      setFormData({
        name: "",
        bio: "",
        job: "",
        topics: [],
        portfolio: "",
        socialLinks: {
          twitter: "",
          instagram: "",
          facebook: "",
          medium: "",
        },
        reason: "",
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
      <Helmet title="Articles | Client" />

      <Navbar />

      {notification && (
        <NotificationCard
          type={notification.type}
          message={notification.message}
          onClose={() => setNotification(null)}
        />
      )}

      <main
        className={`pb-12 min-h-screen transition-colors duration-300 container mx-auto px-6 py-12 ${
          darkMode ? "bg-gray-900" : "bg-gray-50"
        }`}
      >
        <div
          className={`max-w-4xl mx-auto px-4 py-12 ${
            darkMode ? "bg-gray-900" : "bg-white"
          }`}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-10">
            <h1
              className={`text-3xl font-bold ${
                darkMode ? "text-gray-100" : "text-gray-900"
              }`}
            >
              Become an Author
            </h1>
          </div>

          {/* Form Container */}
          <div
            className={`rounded-xl shadow-lg overflow-hidden transition-colors duration-300 ${
              darkMode
                ? "bg-gray-800 border border-gray-700"
                : "bg-white border border-gray-200"
            }`}
          >
            <div className={`p-1 ${darkMode ? "bg-gray-700" : "bg-gray-100"}`}>
              <div
                className={`flex space-x-1 p-1 rounded-lg ${
                  darkMode ? "bg-gray-800" : "bg-white"
                }`}
              >
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>

            <FormAuthorRequest
              darkMode={darkMode}
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              handleCheckboxChange={handleCheckboxChange}
              topics={topics}
              user={user}
              errors={errors}
            />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default AuthorRequestPage;
