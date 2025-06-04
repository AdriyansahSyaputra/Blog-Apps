const FilterDropdown = ({
  darkMode,
  isOpen,
  onClose,
  activeFilter,
  setActiveFilter,
}) => {
  if (!isOpen) return null;

  const filters = [
    { id: "all", label: "All Posts", count: 156 },
    { id: "published", label: "Published", count: 124 },
    { id: "draft", label: "Draft", count: 18 },
    { id: "scheduled", label: "Scheduled", count: 8 },
    { id: "archived", label: "Archived", count: 6 },
  ];

  return (
    <div
      className={`absolute top-full right-0 mt-2 w-48 rounded-xl backdrop-blur-xl border shadow-lg z-50 ${
        darkMode
          ? "bg-gray-900/90 border-gray-700/50"
          : "bg-white/90 border-gray-200/50"
      }`}
    >
      <div className="p-2">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => {
              setActiveFilter(filter.id);
              onClose();
            }}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors duration-200 ${
              activeFilter === filter.id
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                : darkMode
                ? "hover:bg-gray-800 text-gray-300"
                : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            <span>{filter.label}</span>
            <span
              className={`text-xs px-2 py-1 rounded-full ${
                activeFilter === filter.id
                  ? "bg-white/20"
                  : darkMode
                  ? "bg-gray-700 text-gray-400"
                  : "bg-gray-200 text-gray-500"
              }`}
            >
              {filter.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterDropdown;