import { BookOpen, TrendingUp, Users } from "lucide-react";

const StatsSection = ({ darkMode }) => {
  return (
    <section className={`py-16 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
      <div className="container mx-auto px-6">
        <h2
          className={`text-2xl md:text-3xl font-bold text-center mb-12 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Our{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Community
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            {
              icon: <BookOpen className="h-8 w-8" />,
              value: "1,240+",
              label: "Articles Published",
            },
            {
              icon: <Users className="h-8 w-8" />,
              value: "8,500+",
              label: "Active Readers",
            },
            {
              icon: <TrendingUp className="h-8 w-8" />,
              value: "95%",
              label: "Satisfaction Rate",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl text-center transition-all duration-300 ${
                darkMode
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-white hover:bg-gray-50"
              } shadow-lg hover:shadow-xl`}
            >
              <div
                className={`inline-flex items-center justify-center p-4 rounded-full mb-4 ${
                  darkMode
                    ? "bg-indigo-900/30 text-indigo-300"
                    : "bg-indigo-100 text-indigo-600"
                }`}
              >
                {stat.icon}
              </div>
              <h3
                className={`text-3xl font-bold mb-2 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {stat.value}
              </h3>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
