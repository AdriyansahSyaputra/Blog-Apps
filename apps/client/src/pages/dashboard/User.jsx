import UserFilters from "../../components/Layouts/dashboard/User/UserFilters";
import UserHeader from "../../components/Layouts/dashboard/User/UserHeader";
import UserPagination from "../../components/Layouts/dashboard/User/UserPagination";
import UserTable from "../../components/Layouts/dashboard/User/UserTable";
import Sidebar from "../../components/Templates/dashboard/Sidebar";
import Topbar from "../../components/Templates/dashboard/Topbar";
import { useTheme } from "../../context/ThemeContext";
import { useState } from "react";

const User = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 8;

  // Data contoh pengguna
  const users = [
    {
      id: "1",
      name: "Admin Utama",
      email: "admin@blog.com",
      role: "admin",
      status: "active",
      lastActive: new Date(Date.now() - 1000 * 60 * 60),
      avatar: "/avatars/admin.jpg",
      posts: 42,
      joinedDate: new Date("2023-01-15"),
    },
    {
      id: "2",
      name: "Editor Senior",
      email: "editor@blog.com",
      role: "editor",
      status: "active",
      lastActive: new Date(Date.now() - 1000 * 60 * 60 * 3),
      posts: 28,
      joinedDate: new Date("2023-03-10"),
    },
    // Data pengguna lainnya...
  ];

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
      return b.joinedDate.getTime() - a.joinedDate.getTime();
    if (sortBy === "oldest")
      return a.joinedDate.getTime() - b.joinedDate.getTime();
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
            sidebarOpen ? "lg:ml-64" : "ml-0"
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
            <UserHeader
              darkMode={darkMode}
              onAddUser={() => console.log("Tambah pengguna")}
            />

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
              onEditUser={(id) => console.log("Edit", id)}
              onDeleteUser={(id) => console.log("Hapus", id)}
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

export default User;
