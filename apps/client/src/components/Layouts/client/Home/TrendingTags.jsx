const TrendingTags = ({ darkMode, trendingTags }) => {
  return (
    <section className={`py-16 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
      <div className="container mx-auto px-6">
        <h2
          className={`text-2xl md:text-3xl font-bold text-center mb-12 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Trending{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Tags
          </span>
        </h2>

        <div className="flex flex-wrap justify-center gap-3">
          {trendingTags.map((tag, index) => (
            <a
              key={index}
              href="#"
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                darkMode
                  ? "bg-gray-700 hover:bg-gray-600 text-indigo-300"
                  : "bg-white hover:bg-gray-50 text-indigo-600"
              } shadow-md hover:shadow-lg flex items-center`}
            >
              <span className="font-medium">{tag.name}</span>
              <span
                className={`ml-2 text-xs px-2 py-1 rounded-full ${
                  darkMode
                    ? "bg-gray-800 text-gray-300"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {tag.posts}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingTags;
