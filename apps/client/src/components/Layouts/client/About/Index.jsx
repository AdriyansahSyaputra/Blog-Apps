import {
  Award,
  BookOpen,
  Clock,
  Code,
  Globe,
  Heart,
  Layers,
  Mail,
  MessageSquare,
  PenTool,
  Star,
  TrendingUp,
  Users,
  Linkedin,
  Twitter,
} from "lucide-react";
import { useTheme } from "../../../../context/ThemeContext";

const Index = () => {
  const { darkMode } = useTheme();

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      bio: "Full-stack developer with 10+ years experience building web applications.",
      avatar: "/avatars/sarah.jpg",
    },
    {
      name: "Michael Chen",
      role: "Lead Designer",
      bio: "UI/UX specialist focused on creating intuitive user experiences.",
      avatar: "/avatars/michael.jpg",
    },
    {
      name: "Emma Wilson",
      role: "Content Director",
      bio: "Technical writer passionate about making complex topics accessible.",
      avatar: "/avatars/emma.jpg",
    },
    {
      name: "David Kim",
      role: "Frontend Engineer",
      bio: "React expert who loves building interactive interfaces.",
      avatar: "/avatars/david.jpg",
    },
  ];

  const milestones = [
    { year: "2018", event: "Founded BlogZen with a small team of 3 people" },
    { year: "2019", event: "Reached 10,000 monthly active readers" },
    { year: "2020", event: "Launched our premium membership program" },
    { year: "2021", event: "Featured as 'Top Tech Blog' by DevMagazine" },
    { year: "2022", event: "Expanded to video content and tutorials" },
    { year: "2023", event: "Reached 1 million monthly page views" },
  ];

  return (
    <div
      className={`pt-24 pb-12 min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      {/* Hero Section */}
      <section
        className={`relative py-32 ${
          darkMode ? "bg-gray-800" : "bg-white"
        } border-b ${darkMode ? "border-gray-700" : "border-gray-200"}`}
      >
        <div className="container mx-auto px-6 text-center">
          <div
            className={`inline-block px-4 py-2 rounded-full ${
              darkMode
                ? "bg-indigo-900/30 text-indigo-300"
                : "bg-indigo-100 text-indigo-600"
            } text-sm font-medium mb-6`}
          >
            Our Story
          </div>
          <h1
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            More Than{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Just a Blog
            </span>
          </h1>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            We're a passionate team dedicated to creating the best content about
            web development, design, and technology.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div
              className={`p-8 rounded-2xl ${
                darkMode ? "bg-gray-800" : "bg-white"
              } shadow-xl`}
            >
              <div
                className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                  darkMode
                    ? "bg-indigo-900/30 text-indigo-300"
                    : "bg-indigo-100 text-indigo-600"
                }`}
              >
                <Heart className="h-8 w-8" />
              </div>
              <h2
                className={`text-2xl md:text-3xl font-bold mb-4 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Our Mission
              </h2>
              <p
                className={`text-lg mb-6 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                To empower developers and designers with high-quality, practical
                content that helps them build better digital experiences.
              </p>
              <ul className="space-y-4">
                {[
                  "Democratize web development knowledge",
                  "Foster a supportive community",
                  "Promote best practices",
                  "Bridge the gap between theory and practice",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div
                      className={`flex-shrink-0 mt-1 mr-3 ${
                        darkMode ? "text-indigo-400" : "text-indigo-600"
                      }`}
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span
                      className={`${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div
              className={`p-8 rounded-2xl ${
                darkMode ? "bg-gray-800" : "bg-white"
              } shadow-xl`}
            >
              <div
                className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                  darkMode
                    ? "bg-purple-900/30 text-purple-300"
                    : "bg-purple-100 text-purple-600"
                }`}
              >
                <Globe className="h-8 w-8" />
              </div>
              <h2
                className={`text-2xl md:text-3xl font-bold mb-4 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Our Vision
              </h2>
              <p
                className={`text-lg mb-6 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                We envision a world where anyone can learn to build beautiful,
                functional websites regardless of their background.
              </p>
              <div
                className={`p-6 rounded-lg ${
                  darkMode ? "bg-gray-700" : "bg-gray-100"
                } mb-6`}
              >
                <p
                  className={`italic mb-4 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  "Education is the most powerful weapon which you can use to
                  change the world."
                </p>
                <p
                  className={`font-medium ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  - Nelson Mandela
                </p>
              </div>
              <button
                className={`px-6 py-3 rounded-lg font-medium ${
                  darkMode
                    ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                    : "bg-indigo-100 hover:bg-indigo-200 text-indigo-600"
                } transition-colors duration-300`}
              >
                Join Our Community
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Passionate individuals dedicated to creating exceptional content
              and experiences.
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

      {/* Stats Section */}
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
                <p
                  className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
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
                      index % 2 === 0
                        ? "md:right-0 md:mr-2"
                        : "md:left-0 md:ml-2"
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

      {/* Values Section */}
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
              description:
                "We strive for excellence in every piece of content.",
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
    </div>
  );
};

export default Index;
