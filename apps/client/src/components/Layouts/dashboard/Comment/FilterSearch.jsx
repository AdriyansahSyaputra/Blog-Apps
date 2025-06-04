import { Download, Filter, RefreshCw, Search, ChevronDown } from "lucide-react";
import { useState } from "react";

const FilterSearch = ({
  darkMode,
  onSearch,
  onFilter,
  selectedFilter,
  searchTerm,
}) => {
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);

  const filterOptions = [
    { value: "all", label: "All Comments", count: 5 },
    { value: "pending", label: "Pending", count: 1 },
    { value: "approved", label: "Approved", count: 3 },
    { value: "spam", label: "Spam", count: 1 },
  ];

  return (
    <div
      className={`p-6 rounded-2xl backdrop-blur-xl border transition-all duration-300 mb-6 ${
        darkMode
          ? "bg-gray-900/50 border-gray-700/50"
          : "bg-white/50 border-gray-200/50"
      }`}
    >
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search
            className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          />
          <input
            type="text"
            placeholder="Search comments, authors..."
            value={searchTerm}
            onChange={(e) => onSearch(e.target.value)}
            className={`pl-10 pr-4 py-3 w-full rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
              darkMode
                ? "bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
                : "bg-gray-50/50 border-gray-200 text-gray-800 placeholder-gray-500"
            }`}
          />
        </div>

        {/* Filters */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={() => setShowFilterDropdown(!showFilterDropdown)}
              className={`flex items-center space-x-2 px-4 py-3 rounded-xl border transition-all duration-200 ${
                darkMode
                  ? "bg-gray-800/50 border-gray-700 text-gray-300 hover:bg-gray-800"
                  : "bg-gray-50/50 border-gray-200 text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Filter className="w-5 h-5" />
              <span>Filter</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  showFilterDropdown ? "rotate-180" : ""
                }`}
              />
            </button>

            {showFilterDropdown && (
              <div
                className={`absolute right-0 mt-2 w-48 rounded-xl border backdrop-blur-xl z-10 ${
                  darkMode
                    ? "bg-gray-900/90 border-gray-700/50"
                    : "bg-white/90 border-gray-200/50"
                }`}
              >
                <div className="p-2">
                  {filterOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        onFilter(option.value);
                        setShowFilterDropdown(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-all duration-200 ${
                        selectedFilter === option.value
                          ? darkMode
                            ? "bg-blue-600/20 text-blue-400"
                            : "bg-blue-50 text-blue-600"
                          : darkMode
                          ? "hover:bg-gray-800 text-gray-300"
                          : "hover:bg-gray-100 text-gray-700"
                      }`}
                    >
                      <span>{option.label}</span>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          darkMode
                            ? "bg-gray-700 text-gray-400"
                            : "bg-gray-200 text-gray-600"
                        }`}
                      >
                        {option.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button
            className={`p-3 rounded-xl border transition-all duration-200 ${
              darkMode
                ? "bg-gray-800/50 border-gray-700 text-gray-300 hover:bg-gray-800"
                : "bg-gray-50/50 border-gray-200 text-gray-700 hover:bg-gray-100"
            }`}
          >
            <RefreshCw className="w-5 h-5" />
          </button>

          <button
            className={`p-3 rounded-xl border transition-all duration-200 ${
              darkMode
                ? "bg-gray-800/50 border-gray-700 text-gray-300 hover:bg-gray-800"
                : "bg-gray-50/50 border-gray-200 text-gray-700 hover:bg-gray-100"
            }`}
          >
            <Download className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSearch;
