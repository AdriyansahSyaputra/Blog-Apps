import { Linkedin, Mail, Twitter } from "lucide-react";

const TeamSection = ({ darkMode, teamMembers }) => {
  return (
    <section className={`py-20 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className={`text-2xl md:text-3xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Meet{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Our Team
            </span>
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Passionate individuals dedicated to creating exceptional content and
            experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl text-center transition-all duration-300 ${
                darkMode
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-white hover:bg-gray-50"
              } shadow-lg hover:shadow-xl`}
            >
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gray-200 mb-6">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3
                className={`text-xl font-bold mb-1 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {member.name}
              </h3>
              <p
                className={`mb-4 ${
                  darkMode ? "text-indigo-300" : "text-indigo-600"
                }`}
              >
                {member.role}
              </p>
              <p
                className={`text-sm ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {member.bio}
              </p>
              <div className="flex justify-center space-x-3 mt-6">
                {[Twitter, Linkedin, Mail].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className={`p-2 rounded-full ${
                      darkMode
                        ? "bg-gray-600 hover:bg-gray-500 text-gray-300"
                        : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                    } transition-colors duration-200`}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
