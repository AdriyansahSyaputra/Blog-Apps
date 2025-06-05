const CtaSection = ({ darkMode }) => {
  return (
    <section className="container mx-auto px-6 py-16">
      <div
        className={`rounded-2xl p-12 text-center ${
          darkMode ? "bg-gray-800" : "bg-white"
        } shadow-xl`}
      >
        <h2
          className={`text-2xl md:text-3xl font-bold mb-6 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Ready to start your writing journey?
        </h2>
        <p
          className={`text-lg max-w-2xl mx-auto mb-8 ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Join thousands of writers sharing their knowledge with a global
          audience.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-indigo-500/30">
            Get Started - It's Free
          </button>
          <button
            className={`px-8 py-3 font-medium rounded-lg transition-all duration-300 ${
              darkMode
                ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            } shadow-sm`}
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
