const Categories = ({ darkMode }) => {
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
        Categories
      </h3>
      <ul className="space-y-3">
        {[
          "All Articles",
          "React",
          "JavaScript",
          "TypeScript",
          "CSS",
          "Performance",
          "Accessibility",
        ].map((category) => (
          <li key={category}>
            <a
              href="#"
              className={`flex items-center justify-between py-2 px-3 rounded-lg transition-colors duration-200 ${
                darkMode
                  ? "hover:bg-gray-700 text-gray-300"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              <span>{category}</span>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  darkMode
                    ? "bg-gray-700 text-gray-300"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {Math.floor(Math.random() * 50) + 10}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
