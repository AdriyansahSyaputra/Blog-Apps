import { Grid3X3, List, Search } from "lucide-react";

const SearchViewControl = ({
  darkMode,
  setSearchQuery,
  searchQuery,
  setViewMode,
  viewMode,
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
      <div className="relative flex-1 max-w-md">
        <Search
          className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
            darkMode ? "text-gray-400" : "text-gray-500"
          }`}
        />
        <input
          type="text"
          placeholder="Search categories..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={`w-full pl-10 pr-10 py-3 rounded-xl border backdrop-blur-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
            darkMode
              ? "bg-gray-900/50 border-gray-700/50 text-white placeholder-gray-400"
              : "bg-white/50 border-gray-200/50 text-gray-800 placeholder-gray-500"
          }`}
        />
      </div>

      <div className="flex items-center space-x-2">
        <button
          onClick={() => setViewMode("grid")}
          className={`p-3 rounded-xl transition-all duration-200 ${
            viewMode === "grid"
              ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
              : darkMode
              ? "bg-gray-900/50 border border-gray-700/50 text-gray-400 hover:text-white"
              : "bg-white/50 border border-gray-200/50 text-gray-600 hover:text-gray-800"
          }`}
        >
          <Grid3X3 className="w-5 h-5" />
        </button>
        <button
          onClick={() => setViewMode("list")}
          className={`p-3 rounded-xl transition-all duration-200 ${
            viewMode === "list"
              ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
              : darkMode
              ? "bg-gray-900/50 border border-gray-700/50 text-gray-400 hover:text-white"
              : "bg-white/50 border border-gray-200/50 text-gray-600 hover:text-gray-800"
          }`}
        >
          <List className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default SearchViewControl;
