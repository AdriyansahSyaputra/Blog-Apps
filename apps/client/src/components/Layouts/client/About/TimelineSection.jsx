const TimelineSection = ({ darkMode, milestones }) => {
  return (
    <section className={`py-20 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className={`text-2xl md:text-3xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Our{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Key milestones in our growth and development over the years.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div
            className={`absolute left-1/2 w-1 h-full -ml-0.5 ${
              darkMode ? "bg-gray-600" : "bg-gray-300"
            }`}
          ></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative pl-8 pr-8 ${
                  index % 2 === 0
                    ? "md:pl-0 md:pr-16 md:text-right"
                    : "md:pl-16 md:pr-0 md:text-left"
                }`}
              >
                <div
                  className={`absolute top-0 w-4 h-4 rounded-full ${
                    darkMode ? "bg-indigo-500" : "bg-indigo-600"
                  } ${
                    index % 2 === 0 ? "md:right-0 md:mr-2" : "md:left-0 md:ml-2"
                  }`}
                ></div>
                <div
                  className={`p-6 rounded-lg ${
                    darkMode ? "bg-gray-700" : "bg-white"
                  } shadow-md`}
                >
                  <div
                    className={`text-sm font-medium mb-1 ${
                      darkMode ? "text-indigo-300" : "text-indigo-600"
                    }`}
                  >
                    {milestone.year}
                  </div>
                  <h3
                    className={`text-lg font-bold mb-2 ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {milestone.event}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
