const HeroSection = ({ darkMode }) => {
  return (
    <section
      className={`relative py-36 ${
        darkMode ? "bg-gray-800" : "bg-white"
      } border-b ${darkMode ? "border-gray-700" : "border-gray-200"}`}
    >
      <div className="container mx-auto px-6 text-center">
        <div
          className={`inline-block px-4 py-2 rounded-full ${
            darkMode
              ? "bg-indigo-900/30 text-indigo-300"
              : "bg-indigo-100 text-indigo-600"
          } text-sm font-medium mb-6`}
        >
          Our Story
        </div>
        <h1
          className={`text-4xl md:text-5xl font-bold mb-6 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          More Than{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Just a Blog
          </span>
        </h1>
        <p
          className={`text-xl max-w-3xl mx-auto ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          We're a passionate team dedicated to creating the best content about
          web development, design, and technology.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
