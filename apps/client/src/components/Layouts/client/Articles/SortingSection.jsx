const SortingSection = ({ darkMode, articles }) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-start md:items-center justify-between mb-8 p-6 rounded-xl ${
        darkMode ? "bg-gray-800" : "bg-white"
      } shadow-sm`}
    >
      <div>
        <h2
          className={`text-xl font-semibold ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Latest Articles
        </h2>
        <p
          className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}
        >
          Showing {articles.length} articles
        </p>
      </div>
      <div className="mt-4 md:mt-0">
        <select
          className={`px-4 py-2 rounded-lg border ${
            darkMode
              ? "bg-gray-700 border-gray-600 text-white"
              : "bg-white border-gray-300 text-gray-700"
          } focus:outline-none focus:ring-2 ${
            darkMode ? "focus:ring-indigo-500" : "focus:ring-indigo-400"
          }`}
        >
          <option>Newest First</option>
          <option>Oldest First</option>
          <option>Most Popular</option>
          <option>Most Commented</option>
        </select>
      </div>
    </div>
  );
};

export default SortingSection;
