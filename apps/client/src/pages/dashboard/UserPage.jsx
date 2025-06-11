import UserFilters from "../../components/Layouts/dashboard/User/UserFilters";
import UserHeader from "../../components/Layouts/dashboard/User/UserHeader";
import UserPagination from "../../components/Layouts/dashboard/User/UserPagination";
import UserTable from "../../components/Layouts/dashboard/User/UserTable";
import Sidebar from "../../components/Templates/dashboard/Sidebar";
import Topbar from "../../components/Templates/dashboard/Topbar";
import { useTheme } from "../../context/ThemeContext";
import NotificationCard from "../../components/Fragments/NotificationCard";
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
  const usersPerPage = 8;

  useEffect(() => {
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
    fetchUsers();
  }, []);

  // Delete User
  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`/api/dashboard/users/${userId}`, {
        withCredentials: true,
      });
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
  }

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
    </>
  );
};

export default UserPage;
