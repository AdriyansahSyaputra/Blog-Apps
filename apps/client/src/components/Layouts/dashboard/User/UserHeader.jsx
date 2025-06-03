import { Plus } from "lucide-react";

const UserHeader = ({ darkMode, onAddUser }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
      <div>
        <h1
          className={`text-2xl font-bold ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          Manajemen Pengguna
        </h1>
        <p
          className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}
        >
          Kelola semua pengguna yang terdaftar
        </p>
      </div>
      <button
        onClick={onAddUser}
        className={`flex items-center px-4 py-2 mt-4 md:mt-0 rounded-xl transition-all duration-200 font-medium ${
          darkMode
            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
            : "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700"
        }`}
      >
        <Plus className="w-5 h-5 mr-2" />
        Tambah Pengguna
      </button>
    </div>
  );
};

export default UserHeader;
