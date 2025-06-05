const SocialMediaSection = ({ darkMode, socialMedia }) => {
  return (
    <section className="container mx-auto px-6 py-20">
      <div
        className={`p-8 rounded-2xl ${
          darkMode ? "bg-gray-800" : "bg-white"
        } shadow-xl`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className={`text-2xl md:text-3xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Connect on{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Social Media
              </span>
            </h2>
            <p
              className={`text-lg ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Follow us for updates, tips, and community discussions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {socialMedia.map((platform, index) => (
              <a
                key={index}
                href={platform.url}
                className={`p-6 rounded-xl transition-all duration-300 ${
                  darkMode
                    ? "bg-gray-700 hover:bg-gray-600"
                    : "bg-gray-100 hover:bg-gray-200"
                } shadow-md hover:shadow-lg flex items-center`}
              >
                <div
                  className={`p-3 rounded-lg mr-4 ${
                    darkMode
                      ? "bg-gray-600 text-indigo-300"
                      : "bg-white text-indigo-600"
                  } shadow-sm`}
                >
                  {platform.icon}
                </div>
                <div>
                  <h3
                    className={`font-bold ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {platform.name}
                  </h3>
                  <p
                    className={`text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {platform.handle}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
