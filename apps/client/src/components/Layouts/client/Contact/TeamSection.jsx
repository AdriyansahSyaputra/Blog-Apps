import { Clock, Mail, Phone } from "lucide-react";

const TeamSection = ({ darkMode, teamContacts }) => {
  return (
    <section className={`py-20 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className={`text-2xl md:text-3xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Contact Our{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Reach out directly to our team members for specific inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamContacts.map((person, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl transition-all duration-300 ${
                darkMode
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-white hover:bg-gray-50"
              } shadow-lg hover:shadow-xl`}
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="h-16 w-16 rounded-full overflow-hidden bg-gray-200">
                    <img
                      src={person.avatar}
                      alt={person.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3
                    className={`text-xl font-bold mb-1 ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {person.name}
                  </h3>
                  <p
                    className={`mb-4 ${
                      darkMode ? "text-indigo-300" : "text-indigo-600"
                    }`}
                  >
                    {person.role}
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Mail
                        className={`h-5 w-5 mr-3 ${
                          darkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      />
                      <a
                        href={`mailto:${person.email}`}
                        className={`hover:underline ${
                          darkMode
                            ? "text-gray-300 hover:text-indigo-300"
                            : "text-gray-700 hover:text-indigo-600"
                        }`}
                      >
                        {person.email}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Phone
                        className={`h-5 w-5 mr-3 ${
                          darkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      />
                      <a
                        href={`tel:${person.phone.replace(/\D/g, "")}`}
                        className={`hover:underline ${
                          darkMode
                            ? "text-gray-300 hover:text-indigo-300"
                            : "text-gray-700 hover:text-indigo-600"
                        }`}
                      >
                        {person.phone}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Clock
                        className={`h-5 w-5 mr-3 ${
                          darkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      />
                      <span
                        className={`${
                          darkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {person.hours}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
