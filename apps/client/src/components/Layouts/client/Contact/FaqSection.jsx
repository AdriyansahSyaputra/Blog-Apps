const FaqSection = ({ darkMode }) => {
  return (
    <section className={`py-20 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className={`text-2xl md:text-3xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Quick answers to common questions about BlogZen.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              question: "How long does it take to get a response?",
              answer:
                "We typically respond within 24-48 hours during business days. For urgent matters, please call our support line.",
            },
            {
              question: "Do you offer technical support for readers?",
              answer:
                "Yes! Our technical team is happy to help with any issues related to our content or platform.",
            },
            {
              question: "Can I contribute an article to BlogZen?",
              answer:
                "We welcome guest contributions! Please email our editorial team with your pitch and writing samples.",
            },
            {
              question: "Where can I find your community guidelines?",
              answer:
                "Our community guidelines are available in the footer of every page and in your account dashboard.",
            },
          ].map((faq, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl transition-all duration-300 ${
                darkMode
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-white hover:bg-gray-50"
              } shadow-lg hover:shadow-xl`}
            >
              <h3
                className={`text-lg font-bold mb-2 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {faq.question}
              </h3>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
