import { Code, Layers, PenTool, Star, TrendingUp, Users } from "lucide-react";

const ValuesSection = ({ darkMode }) => {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2
          className={`text-2xl md:text-3xl font-bold mb-4 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Our Core{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Values
          </span>
        </h2>
        <p
          className={`text-lg max-w-2xl mx-auto ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          The principles that guide everything we do at BlogZen.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: <PenTool className="h-8 w-8" />,
            title: "Quality",
            description:
              "We never compromise on the quality of our content and resources.",
          },
          {
            icon: <Layers className="h-8 w-8" />,
            title: "Transparency",
            description: "We're open about our processes and decisions.",
          },
          {
            icon: <Code className="h-8 w-8" />,
            title: "Innovation",
            description: "We constantly explore new ways to deliver value.",
          },
          {
            icon: <Users className="h-8 w-8" />,
            title: "Community",
            description:
              "Our readers and contributors are at the heart of everything.",
          },
          {
            icon: <Star className="h-8 w-8" />,
            title: "Excellence",
            description: "We strive for excellence in every piece of content.",
          },
          {
            icon: <TrendingUp className="h-8 w-8" />,
            title: "Growth",
            description: "We believe in continuous learning and improvement.",
          },
        ].map((value, index) => (
          <div
            key={index}
            className={`p-8 rounded-xl transition-all duration-300 ${
              darkMode
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-white hover:bg-gray-50"
            } shadow-lg hover:shadow-xl`}
          >
            <div
              className={`inline-flex items-center justify-center p-4 rounded-xl mb-6 ${
                darkMode
                  ? "bg-indigo-900/30 text-indigo-300"
                  : "bg-indigo-100 text-indigo-600"
              }`}
            >
              {value.icon}
            </div>
            <h3
              className={`text-xl font-bold mb-3 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {value.title}
            </h3>
            <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValuesSection;
