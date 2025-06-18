import { CheckCircle2, XCircle, Edit, Trash2 } from "lucide-react";

const UserTable = ({ users, darkMode, handleDeleteUser, handleEditUser }) => {
  const getStatusIcon = (status) => {
    return status === "active" ? (
      <CheckCircle2 className="w-4 h-4 text-green-500" />
    ) : (
      <XCircle className="w-4 h-4 text-red-500" />
    );
  };

  const getRoleColor = (role) => {
    switch (role) {
      case "admin":
        return darkMode
          ? "bg-purple-900/30 text-purple-300"
          : "bg-purple-100 text-purple-800";
      case "author":
        return darkMode
          ? "bg-blue-900/30 text-blue-300"
          : "bg-blue-100 text-blue-800";
      default:
        return darkMode
          ? "bg-green-900/30 text-green-300"
          : "bg-green-100 text-green-800";
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div
      className={`rounded-xl overflow-hidden border transition-all duration-300 ${
        darkMode ? "border-gray-700" : "border-gray-200"
      }`}
    >
      {/* Header Tabel */}
      <div
        className={`grid grid-cols-12 items-center px-4 py-3 border-b ${
          darkMode
            ? "bg-gray-800/50 border-gray-700"
            : "bg-gray-50 border-gray-200"
        }`}
      >
        <div className="col-span-4 md:col-span-3">
          <span
            className={`text-sm font-medium ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Pengguna
          </span>
        </div>
        <div className="col-span-3 md:col-span-2 text-center">
          <span
            className={`text-sm font-medium ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Peran
          </span>
        </div>
        <div className="col-span-2 text-center hidden sm:block">
          <span
            className={`text-sm font-medium ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Status
          </span>
        </div>
        <div className="col-span-3 text-center hidden md:block">
          <span
            className={`text-sm font-medium ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Bergabung
          </span>
        </div>
        <div className="col-span-2 text-right">
          <span
            className={`text-sm font-medium ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Aksi
          </span>
        </div>
      </div>

      {/* Isi Tabel */}
      {users.length === 0 ? (
        <div
          className={`flex flex-col items-center justify-center p-8 ${
            darkMode ? "bg-gray-800/30" : "bg-white"
          }`}
        >
          <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 mb-4 flex items-center justify-center">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </div>
          <h3
            className={`text-lg font-medium mb-1 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Tidak ada pengguna
          </h3>
          <p
            className={`text-sm ${
              darkMode ? "text-gray-500" : "text-gray-400"
            }`}
          >
            Coba sesuaikan pencarian atau filter
          </p>
        </div>
      ) : (
        <div
          className={`divide-y ${
            darkMode
              ? "divide-gray-700 bg-gray-800/30"
              : "divide-gray-200 bg-white"
          }`}
        >
          {users.map((user) => (
            <div
              key={user._id}
              className="grid grid-cols-12 items-center px-4 py-3 hover:bg-opacity-50 transition-colors duration-200 group"
            >
              <div className="col-span-4 md:col-span-3 flex items-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mr-3">
                  {user.avatar ? (
                    <img
                      src={`${import.meta.env.VITE_BASE_URL}/uploads/img/profile/${user.avatar}`}
                      alt={user.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <span className="text-white text-xs font-medium">
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  )}
                </div>
                <div>
                  <h3
                    className={`text-sm font-medium truncate ${
                      darkMode ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {user.name}
                  </h3>
                  <p
                    className={`text-xs truncate ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {user.email}
                  </p>
                </div>
              </div>
              <div className="col-span-3 md:col-span-2 text-center">
                <span
                  className={`text-xs px-2 py-1 rounded-full capitalize ${getRoleColor(
                    user.role
                  )}`}
                >
                  {user.role}
                </span>
              </div>
              <div className="col-span-2 text-center hidden sm:block">
                <div className="flex items-center justify-center">
                  {getStatusIcon(user.status)}
                  <span
                    className={`ml-1 text-xs capitalize ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {user.status}
                  </span>
                </div>
              </div>
              <div className="col-span-3 text-center hidden md:block">
                <span
                  className={`text-xs ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {formatDate(user.createdAt)}
                </span>
              </div>
              <div className="col-span-2 text-right">
                <div className="flex items-center justify-end space-x-2">
                  <button
                    onClick={() => handleEditUser(user)}
                    className={`p-1 rounded-full ${
                      darkMode
                        ? "hover:bg-gray-700 text-gray-300"
                        : "hover:bg-gray-100 text-gray-600"
                    }`}
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDeleteUser(user._id)}
                    className={`p-1 rounded-full ${
                      darkMode
                        ? "hover:bg-gray-700 text-gray-300"
                        : "hover:bg-gray-100 text-gray-600"
                    }`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserTable;
