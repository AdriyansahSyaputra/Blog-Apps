import { Search, Filter, ChevronDown } from "lucide-react";

const UserFilters = ({
  darkMode,
  searchQuery,
  onSearchChange,
  selectedRole,
  onRoleChange,
  sortBy,
  onSortChange,
}) => {
  return (
    <div
      className={`rounded-xl p-4 mb-6 transition-all duration-300 ${
        darkMode ? "bg-gray-800/50 border-gray-700" : "bg-white border-gray-200"
      } border`}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="relative flex-1">
          <Search
            className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          />
          <input
            type="text"
            placeholder="Cari pengguna..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className={`pl-10 pr-4 py-2 w-full rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 ${
              darkMode
                ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:ring-blue-500/50"
                : "bg-white border-gray-200 text-gray-800 placeholder-gray-500 focus:ring-blue-500/30"
            }`}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative">
            <select
              value={selectedRole}
              onChange={(e) => onRoleChange(e.target.value)}
              className={`appearance-none pl-3 pr-8 py-2 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 ${
                darkMode
                  ? "bg-gray-800 border-gray-700 text-white focus:ring-blue-500/50"
                  : "bg-white border-gray-200 text-gray-800 focus:ring-blue-500/30"
              }`}
            >
              <option value="all">Semua Peran</option>
              <option value="admin">Admin</option>
              <option value="viewer">Viewer</option>
              <option value="author">Author</option>
              <option value="membership">Membership</option>
            </select>
            <ChevronDown
              className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            />
          </div>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className={`appearance-none pl-3 pr-8 py-2 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 ${
                darkMode
                  ? "bg-gray-800 border-gray-700 text-white focus:ring-blue-500/50"
                  : "bg-white border-gray-200 text-gray-800 focus:ring-blue-500/30"
              }`}
            >
              <option value="newest">Terbaru</option>
              <option value="oldest">Terlama</option>
              <option value="name">Berdasarkan Nama</option>
            </select>
            <Filter
              className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserFilters;
