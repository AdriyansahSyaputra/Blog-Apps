import UserFilters from "../../components/Layouts/dashboard/User/UserFilters";
import UserHeader from "../../components/Layouts/dashboard/User/UserHeader";
import UserPagination from "../../components/Layouts/dashboard/User/UserPagination";
import UserTable from "../../components/Layouts/dashboard/User/UserTable";
import Sidebar from "../../components/Templates/dashboard/Sidebar";
import Topbar from "../../components/Templates/dashboard/Topbar";
import { useTheme } from "../../context/ThemeContext";
import NotificationCard from "../../components/Fragments/NotificationCard";
import UserUpdateModal from "../../components/Layouts/dashboard/User/UserUpdateModal";
import { useState, useEffect } from "react";
import axios from "axios";

const UserPage = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [notification, setNotification] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
  const usersPerPage = 8;

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    birthday: "",
    role: "",
    status: "",
    avatar: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Ambil data user
  const handleEditUser = (user) => {
    setFormData(user);
    setModalOpen(true);
  };

  // Handle save
  const handleSave = async () => {
    try {
      const formDataToSend = new FormData();

      // Tambahkan semua field ke FormData
      formDataToSend.append("name", formData.name);
      formDataToSend.append("username", formData.username);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("birthday", formData.birthday);
      formDataToSend.append("role", formData.role);
      formDataToSend.append("status", formData.status);

      // Tambahkan file jika ada (File dari <input type="file" />)
      if (formData.avatar instanceof File) {
        formDataToSend.append("avatar", formData.avatar);
      }

      // Tambahkan flag removeAvatar
      formDataToSend.append(
        "removeAvatar",
        formData.removeAvatar ? "true" : "false"
      );

      // Kirim ke backend
      await axios.put(`/api/dashboard/users/${formData._id}`, formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      await fetchUsers();

      setModalOpen(false);

      setNotification({
        type: "success",
        message: "User updated successfully.",
      });
    } catch (err) {
      let errorMessage = "Network error. Please check your connection.";
      let fieldErrors = {};

      if (err.response) {
        if (err.response.data?.errors) {
          fieldErrors = err.response.data.errors;
          errorMessage = "Please fix the form errors";
        } else {
          errorMessage = err.response.data?.message || errorMessage;
        }
      } else if (err.request) {
        errorMessage = "Server is not responding. Please try later.";
      }

      setErrors(fieldErrors);
      setNotification({ type: "error", message: errorMessage });
    }
  };

  const handleCancel = () => {
    setModalOpen(false);
  };

  // Fetch users
  const fetchUsers = async () => {
    try {
      const res = await axios.get("/api/dashboard/users", {
        withCredentials: true,
      });
      const userWithDates = res.data.map((user) => ({
        ...user,
        createdAt: new Date(user.createdAt),
        updatedAt: new Date(user.updatedAt),
      }));
      setUsers(userWithDates);
    } catch (err) {
      console.log("Gagal mengambil data pengguna:", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Delete User
  const handleDeleteUser = async (userId) => {
    try {
      if (window.confirm("Are you sure you want to delete this user?")) {
        await axios.delete(`/api/dashboard/users/${userId}`, {
          withCredentials: true,
        });
      }

      await fetchUsers();

      setNotification({
        type: "success",
        message: "User deleted successfully.",
      });
    } catch (err) {
      console.log("Gagal menghapus pengguna:", err);
      setNotification({
        type: "error",
        message: err.response?.data?.message || "Error deleting user.",
      });
    }
  };

  // Upload image
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

  // Remove image
  const removeImage = () => {
    setSelectedImage(null);
    setFormData((prev) => ({
      ...prev,
      avatar: null,
      removeAvatar: true,
    }));
  };

  // Filter data pengguna
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = selectedRole === "all" || user.role === selectedRole;
    return matchesSearch && matchesRole;
  });

  // Urutkan data pengguna
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (sortBy === "newest")
      return b.createdAt.getTime() - a.createdAt.getTime();
    if (sortBy === "oldest")
      return a.createdAt.getTime() - b.createdAt.getTime();
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return 0;
  });

  // Pagination
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(sortedUsers.length / usersPerPage);

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

          {/* Dashboard Content */}
          <main className="p-6">
            <UserHeader darkMode={darkMode} />

            <UserFilters
              darkMode={darkMode}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedRole={selectedRole}
              onRoleChange={setSelectedRole}
              sortBy={sortBy}
              onSortChange={setSortBy}
            />

            <UserTable
              users={currentUsers}
              darkMode={darkMode}
              handleDeleteUser={handleDeleteUser}
              handleEditUser={handleEditUser}
            />

            <UserPagination
              darkMode={darkMode}
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              totalItems={sortedUsers.length}
              itemsPerPage={usersPerPage}
              indexOfFirstItem={indexOfFirstUser + 1}
              indexOfLastItem={Math.min(indexOfLastUser, sortedUsers.length)}
            />
          </main>
        </div>
      </div>

      {/* Modal update */}
      {modalOpen && (
        <UserUpdateModal
          darkMode={darkMode}
          handleCancel={handleCancel}
          handleChange={handleChange}
          formData={formData}
          handleSave={handleSave}
          errors={errors}
          selectedImage={selectedImage}
          removeImage={removeImage}
          handleImageUpload={handleImageUpload}
        />
      )}
    </>
  );
};

export default UserPage;
