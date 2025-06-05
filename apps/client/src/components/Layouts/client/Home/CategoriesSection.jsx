const CategoriesSection = ({ darkMode, popularCategories }) => {
  return (
    <section className="container mx-auto px-6 py-16">
      <h2
        className={`text-2xl md:text-3xl font-bold text-center mb-12 ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
      >
        Explore{" "}
        <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Categories
        </span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {popularCategories.map((category, index) => (
          <a
            key={index}
            href="#"
            className={`p-6 rounded-lg transition-all duration-300 ${
              darkMode
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-white hover:bg-gray-50"
            } shadow-md hover:shadow-lg flex items-center justify-between`}
          >
            <div className="flex items-center space-x-3">
              <div
                className={`p-2 rounded-lg ${
                  darkMode
                    ? "bg-indigo-900/30 text-indigo-300"
                    : "bg-indigo-100 text-indigo-600"
                }`}
              >
                {category.icon}
              </div>
              <span
                className={`font-medium ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {category.name}
              </span>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-xs ${
                darkMode
                  ? "bg-gray-700 text-gray-300"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {category.count} articles
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
