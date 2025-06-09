import { useState } from "react";
import { Globe, Facebook, Instagram, Twitter, FileText } from "lucide-react";
import DesktopTable from "../../components/Layouts/dashboard/RequestAuthor/DesktopTable";
import MobileCard from "../../components/Layouts/dashboard/RequestAuthor/MobileCard";
import ModalInfo from "../../components/Layouts/dashboard/RequestAuthor/ModalInfo";
import Sidebar from "../../components/Templates/dashboard/Sidebar";
import Topbar from "../../components/Templates/dashboard/Topbar";
import { useTheme } from "../../context/ThemeContext";
import { Helmet } from "react-helmet-async";

const UserRequestsPage = () => {
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { darkMode, toggleTheme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [requests, setRequests] = useState([
    {
      _id: "1",
      name: "John Doe",
      email: "john.doe@example.com",
      authorRequest: {
        bio: "Passionate writer with 5+ years of experience in tech journalism and content creation. Love to share insights about modern web development.",
        job: "Senior Frontend Developer",
        topics: ["React", "JavaScript", "Web Development", "UI/UX"],
        portfolio: "https://johndoe.dev",
        socialLinks: {
          twitter: "https://twitter.com/johndoe",
          instagram: "https://instagram.com/johndoe",
          facebook: "https://facebook.com/johndoe",
          medium: "https://medium.com/@johndoe",
        },
        reason:
          "I want to contribute to the tech community by sharing my knowledge and experiences in web development.",
        requestedAt: new Date("2024-12-01T10:30:00Z"),
        status: "pending",
      },
    },
    {
      _id: "2",
      name: "Sarah Wilson",
      email: "sarah.wilson@example.com",
      authorRequest: {
        bio: "Digital marketing specialist and content strategist with expertise in SEO and social media management.",
        job: "Marketing Manager",
        topics: [
          "Digital Marketing",
          "SEO",
          "Content Strategy",
          "Social Media",
        ],
        portfolio: "https://sarahwilson.com",
        socialLinks: {
          twitter: "https://twitter.com/sarahwilson",
          instagram: "https://instagram.com/sarahwilson",
          medium: "https://medium.com/@sarahwilson",
        },
        reason:
          "I believe my marketing expertise can help other businesses grow their online presence.",
        requestedAt: new Date("2024-11-28T14:20:00Z"),
        status: "pending",
      },
    },
    {
      _id: "3",
      name: "Mike Chen",
      email: "mike.chen@example.com",
      authorRequest: {
        bio: "Full-stack developer and tech enthusiast. I enjoy building scalable applications and exploring new technologies.",
        job: "Full Stack Developer",
        topics: ["Node.js", "Python", "Database Design", "Cloud Computing"],
        portfolio: "https://mikechen.dev",
        socialLinks: {
          twitter: "https://twitter.com/mikechen",
          facebook: "https://facebook.com/mikechen",
        },
        reason:
          "I want to document my learning journey and help other developers solve common problems.",
        requestedAt: new Date("2024-11-25T09:15:00Z"),
        status: "pending",
      },
    },
  ]);

  const handleAction = (requestId, action) => {
    setRequests((prev) =>
      prev.map((req) =>
        req._id === requestId
          ? { ...req, authorRequest: { ...req.authorRequest, status: action } }
          : req
      )
    );
    setShowModal(false);
    setSelectedRequest(null);
  };

  const handleDelete = (requestId) => {
    setRequests((prev) => prev.filter((req) => req._id !== requestId));
  };

  const openModal = (request) => {
    setSelectedRequest(request);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedRequest(null);
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getSocialIcon = (platform) => {
    switch (platform) {
      case "twitter":
        return <Twitter className="w-4 h-4" />;
      case "instagram":
        return <Instagram className="w-4 h-4" />;
      case "facebook":
        return <Facebook className="w-4 h-4" />;
      case "medium":
        return <FileText className="w-4 h-4" />;
      default:
        return <Globe className="w-4 h-4" />;
    }
  };

  return (
    <>
      <Helmet title="Dashboard | Author Requests" />

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

        <div
          className={`transition-all duration-300 ${
            sidebarOpen ? "lg:ml-64" : "ml-20"
          }`}
        >
          {/* Topbar */}
          <Topbar
            darkMode={darkMode}
            toggleTheme={toggleTheme}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />

          {/* Main Content */}
          <main className="p-6 max-w-7xl mx-auto">
              {/* Header */}
              <div className="mb-8">
                <h1
                  className={`text-3xl font-bold ${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  Author Requests
                </h1>
                <p
                  className={`mt-2 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Manage user requests to become authors
                </p>
              </div>

              {/* Table Card */}
              <div
                className={`backdrop-blur-xl rounded-2xl border shadow-xl overflow-hidden ${
                  darkMode
                    ? "bg-gray-900/90 border-gray-700/50"
                    : "bg-white/90 border-gray-200/50"
                }`}
              >
                {/* Desktop Table */}
                <DesktopTable
                  darkMode={darkMode}
                  requests={requests}
                  formatDate={formatDate}
                  handleAction={handleAction}
                  openModal={openModal}
                  handleDelete={handleDelete}
                />

                {/* Mobile Cards */}
                <MobileCard
                  darkMode={darkMode}
                  requests={requests}
                  formatDate={formatDate}
                  openModal={openModal}
                  handleAction={handleAction}
                  handleDelete={handleDelete}
                />
              </div>

            {/* Modal */}
            {showModal && selectedRequest && (
              <ModalInfo
                darkMode={darkMode}
                closeModal={closeModal}
                selectedRequest={selectedRequest}
                formatDate={formatDate}
                getSocialIcon={getSocialIcon}
                handleAction={handleAction}
              />
            )}
          </main>
        </div>
      </div>
    </>
  );
};

export default UserRequestsPage;
