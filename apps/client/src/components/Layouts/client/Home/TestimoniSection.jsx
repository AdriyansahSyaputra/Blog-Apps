const TestimoniSection = ({ darkMode }) => {
  return (
    <section className={`py-16 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
      <div className="container mx-auto px-6">
        <h2
          className={`text-2xl md:text-3xl font-bold text-center mb-12 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          What Our{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Readers Say
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote:
                "BlogZen has completely transformed how I consume content. The quality of articles is exceptional!",
              author: "David Miller",
              role: "Product Designer",
            },
            {
              quote:
                "As a writer, I've found my perfect platform. The community engagement is unlike anything else.",
              author: "Sophia Chen",
              role: "Tech Writer",
            },
            {
              quote:
                "The dark mode reading experience is so easy on the eyes. I spend hours here every day learning new things.",
              author: "James Wilson",
              role: "Developer",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl transition-all duration-300 ${
                darkMode
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-white hover:bg-gray-50"
              } shadow-lg hover:shadow-xl`}
            >
              <div
                className={`mb-6 text-5xl ${
                  darkMode ? "text-gray-600" : "text-gray-200"
                }`}
              >
                "
              </div>
              <p
                className={`text-lg italic mb-6 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {testimonial.quote}
              </p>
              <div>
                <h4
                  className={`font-bold ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {testimonial.author}
                </h4>
                <p
                  className={`text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimoniSection;
