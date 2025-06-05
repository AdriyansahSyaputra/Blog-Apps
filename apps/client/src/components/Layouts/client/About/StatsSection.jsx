import { Award, BookOpen, MessageSquare, Users } from "lucide-react";

const StatsSection = ({ darkMode }) => {
  return (
    <section className="container mx-auto px-6 py-20">
      <div
        className={`p-8 rounded-2xl ${
          darkMode ? "bg-gray-800" : "bg-white"
        } shadow-xl`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <BookOpen className="h-8 w-8" />,
              value: "1,240+",
              label: "Articles Published",
            },
            {
              icon: <Users className="h-8 w-8" />,
              value: "8,500+",
              label: "Community Members",
            },
            {
              icon: <MessageSquare className="h-8 w-8" />,
              value: "24,000+",
              label: "Comments",
            },
            {
              icon: <Award className="h-8 w-8" />,
              value: "12",
              label: "Industry Awards",
            },
          ].map((stat, index) => (
            <div key={index} className="text-center">
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
