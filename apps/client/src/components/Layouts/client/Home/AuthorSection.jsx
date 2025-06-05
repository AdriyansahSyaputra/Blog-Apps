const AuthorSection = ({ darkMode, topAuthors }) => {
  return (
    <section className="container mx-auto px-6 py-16">
      <h2
        className={`text-2xl md:text-3xl font-bold text-center mb-12 ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
      >
        Featured{" "}
        <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Authors
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {topAuthors.map((author, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl transition-all duration-300 ${
              darkMode
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-white hover:bg-gray-50"
            } shadow-lg hover:shadow-xl flex items-center space-x-4`}
          >
            <div className="flex-shrink-0">
              <div className="h-16 w-16 rounded-full overflow-hidden bg-gray-200">
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div>
              <h3
                className={`text-lg font-bold ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {author.name}
              </h3>
              <div className="flex space-x-4 mt-1">
                <span
                  className={`text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {author.posts} posts
                </span>
                <span
                  className={`text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {author.followers} followers
                </span>
              </div>
              <button
                className={`mt-3 px-4 py-1.5 text-sm rounded-lg ${
                  darkMode
                    ? "bg-indigo-900/30 text-indigo-300 hover:bg-indigo-900/50"
                    : "bg-indigo-100 text-indigo-600 hover:bg-indigo-200"
                } transition-colors duration-200`}
              >
                Follow
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AuthorSection;
