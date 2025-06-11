import { useState, useEffect } from "react";
import { Globe, Facebook, Instagram, Twitter, FileText } from "lucide-react";
import DesktopTable from "../../components/Layouts/dashboard/RequestAuthor/DesktopTable";
import MobileCard from "../../components/Layouts/dashboard/RequestAuthor/MobileCard";
import ModalInfo from "../../components/Layouts/dashboard/RequestAuthor/ModalInfo";
import Sidebar from "../../components/Templates/dashboard/Sidebar";
import Topbar from "../../components/Templates/dashboard/Topbar";
import { useTheme } from "../../context/ThemeContext";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import NotificationCard from "../../components/Fragments/NotificationCard";

const UserRequestsPage = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [pendingUsers, setPendingUsers] = useState([]);
  const [notification, setNotification] = useState(null);

  // Fetch pending users
  useEffect(() => {
    const fetchPendingUsers = async () => {
      try {
        const res = await axios.get(
          "/api/dashboard/authors/request?status=pending",
          {
            withCredentials: true,
          }
        );
        setPendingUsers(res.data);
      } catch (err) {
        console.log("Gagal mengambil data pengguna:", err);
      }
    };
    fetchPendingUsers();
  }, []);

  // Handle Approve request
  const handleApprove = async (userId) => {
    try {
      await axios.patch(
        `/api/dashboard/authors/request/${userId}/approve`,
        {},
        {
          withCredentials: true,
        }
      );
      setNotification({
        type: "success",
        message: "Author request approved successfully.",
      });

      // Update the pending users list after approval
      setPendingUsers((prevUsers) =>
        prevUsers.filter((user) => user.id !== userId)
      );
    } catch (err) {
      console.log("Gagal mengubah status pengguna:", err);
      setNotification({
        type: "error",
        message: err.response?.data?.message || "Error approving request.",
      });
    }
  };

  // Handle Reject request
  const handleReject = async (userId) => {
    try {
      await axios.patch(
        `/api/dashboard/authors/request/${userId}/reject`,
        {},
        {
          withCredentials: true,
        }
      );
      setNotification({
        type: "success",
        message: "Author request rejected successfully.",
      });

      // Update the pending users list after rejection
      setPendingUsers((prevUsers) =>
        prevUsers.filter((user) => user.id !== userId)
      );
    } catch (err) {
      console.log("Gagal mengubah status pengguna:", err);
      setNotification({
        type: "error",
        message: err.response?.data?.message || "Error rejecting request.",
      });
    }
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
                requests={pendingUsers}
                formatDate={formatDate}
                openModal={openModal}
                handleApprove={handleApprove}
                handleReject={handleReject}
              />

              {/* Mobile Cards */}
              <MobileCard
                darkMode={darkMode}
                requests={pendingUsers}
                formatDate={formatDate}
                openModal={openModal}
                handleApprove={handleApprove}
                handleReject={handleReject}
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
                handleApprove={(userId) => handleApprove(userId, closeModal)}
                handleReject={(userId) => handleReject(userId, closeModal)}
              />
            )}
          </main>
        </div>
      </div>
    </>
  );
};

export default UserRequestsPage;
