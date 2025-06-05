import { Coffee } from "lucide-react";

const CtaSection = ({ darkMode }) => {
  return (
    <section className="container mx-auto px-6 py-20">
      <div
        className={`p-12 rounded-2xl text-center ${
          darkMode ? "bg-gray-800" : "bg-white"
        } shadow-xl`}
      >
        <div className="max-w-2xl mx-auto">
          <Coffee
            className={`h-12 w-12 mx-auto mb-6 ${
              darkMode ? "text-indigo-400" : "text-indigo-600"
            }`}
          />
          <h2
            className={`text-2xl md:text-3xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Still Have Questions?
          </h2>
          <p
            className={`text-lg mb-8 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            We're here to help! Reach out anytime and we'll be happy to assist
            you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              className={`px-8 py-3 rounded-lg font-medium ${
                darkMode
                  ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                  : "bg-indigo-100 hover:bg-indigo-200 text-indigo-600"
              } transition-colors duration-300`}
            >
              Contact Support
            </button>
            <button
              className={`px-8 py-3 rounded-lg font-medium ${
                darkMode
                  ? "bg-gray-700 hover:bg-gray-600 text-gray-300"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              } transition-colors duration-300`}
            >
              Visit Help Center
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
