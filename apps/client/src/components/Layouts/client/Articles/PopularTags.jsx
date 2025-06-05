const PopularTags = ({ darkMode, popularTags }) => {
  return (
    <div
      className={`p-6 rounded-xl shadow-sm ${
        darkMode ? "bg-gray-800" : "bg-white"
      }`}
    >
      <h3
        className={`text-lg font-semibold mb-4 ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
      >
        Popular Tags
      </h3>
      <div className="flex flex-wrap gap-2">
        {popularTags.map((tag) => (
          <a
            key={tag.name}
            href="#"
            className={`px-3 py-1.5 text-sm rounded-full transition-colors duration-200 ${
              darkMode
                ? "bg-gray-700 hover:bg-gray-600 text-indigo-300"
                : "bg-gray-100 hover:bg-gray-200 text-indigo-600"
            }`}
          >
            #{tag.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default PopularTags;
