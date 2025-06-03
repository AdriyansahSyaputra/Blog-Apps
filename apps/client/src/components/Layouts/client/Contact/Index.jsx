import {
  AtSign,
  Clock,
  Coffee,
  Compass,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  User,
} from "lucide-react";
import { useTheme } from "../../../../context/ThemeContext";

const Index = () => {
  const { darkMode } = useTheme();

  const teamContacts = [
    {
      name: "Sarah Johnson",
      role: "Customer Support",
      email: "sarah@blogzen.com",
      phone: "+1 (555) 123-4567",
      hours: "Mon-Fri, 9AM-5PM EST",
      avatar: "/avatars/sarah.jpg",
    },
    {
      name: "Michael Chen",
      role: "Technical Inquiries",
      email: "michael@blogzen.com",
      phone: "+1 (555) 987-6543",
      hours: "Mon-Fri, 10AM-6PM EST",
      avatar: "/avatars/michael.jpg",
    },
  ];

  const socialMedia = [
    {
      name: "Twitter",
      handle: "@blogzen",
      icon: <AtSign className="h-5 w-5" />,
      url: "#",
    },
    {
      name: "Instagram",
      handle: "@blogzen.official",
      icon: <Compass className="h-5 w-5" />,
      url: "#",
    },
    {
      name: "LinkedIn",
      handle: "BlogZen Inc.",
      icon: <MessageSquare className="h-5 w-5" />,
      url: "#",
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      {/* Hero Section */}
      <section
        className={`relative py-32 overflow-hidden ${
          darkMode ? "bg-gray-800" : "bg-white"
        } border-b ${darkMode ? "border-gray-700" : "border-gray-200"}`}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 space-y-6">
              <div
                className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                  darkMode
                    ? "bg-indigo-900/30 text-indigo-300"
                    : "bg-indigo-100 text-indigo-600"
                }`}
              >
                <Send className="h-4 w-4 mr-2" />
                Get in Touch
              </div>
              <h1
                className={`text-4xl md:text-5xl font-bold leading-tight ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Let's{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Connect
                </span>
              </h1>
              <p
                className={`text-xl ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                We'd love to hear from you! Whether you have questions,
                feedback, or just want to say hello.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#"
                  className={`flex items-center px-4 py-2 rounded-lg ${
                    darkMode
                      ? "bg-gray-700 hover:bg-gray-600 text-gray-300"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                  } transition-colors duration-200`}
                >
                  <Mail className="h-5 w-5 mr-2" />
                  hello@blogzen.com
                </a>
                <a
                  href="#"
                  className={`flex items-center px-4 py-2 rounded-lg ${
                    darkMode
                      ? "bg-gray-700 hover:bg-gray-600 text-gray-300"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                  } transition-colors duration-200`}
                >
                  <Phone className="h-5 w-5 mr-2" />
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div
                className={`p-1 rounded-2xl ${
                  darkMode ? "bg-gray-700" : "bg-gray-200"
                } shadow-lg`}
              >
                <div
                  className={`rounded-xl overflow-hidden ${
                    darkMode ? "bg-gray-800" : "bg-white"
                  }`}
                >
                  <div className="aspect-video bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                    <MapPin className="h-12 w-12 text-white" />
                  </div>
                  <div className="p-8">
                    <h3
                      className={`text-xl font-bold mb-4 ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Our Headquarters
                    </h3>
                    <p
                      className={`mb-6 ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      123 Tech Street, Suite 456
                      <br />
                      San Francisco, CA 94107
                      <br />
                      United States
                    </p>
                    <button
                      className={`w-full flex items-center justify-center px-6 py-3 rounded-lg font-medium ${
                        darkMode
                          ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                          : "bg-indigo-100 hover:bg-indigo-200 text-indigo-600"
                      } transition-colors duration-300`}
                    >
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>
              <div
                className={`absolute -bottom-6 -left-6 h-32 w-32 rounded-xl ${
                  darkMode ? "bg-indigo-900/20" : "bg-indigo-100/80"
                } -z-10`}
              ></div>
              <div
                className={`absolute -top-6 -right-6 h-32 w-32 rounded-xl ${
                  darkMode ? "bg-purple-900/20" : "bg-purple-100/80"
                } -z-10`}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto px-6 py-20">
        <div
          className={`p-8 rounded-2xl shadow-xl ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2
                className={`text-2xl md:text-3xl font-bold mb-4 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Send Us a{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Message
                </span>
              </h2>
              <p
                className={`text-lg ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Your Name
                  </label>
                  <div className="relative">
                    <div
                      className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      <User className="h-5 w-5" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                        darkMode
                          ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500"
                          : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-indigo-400 focus:border-indigo-400"
                      } focus:outline-none focus:ring-2`}
                      placeholder="John Doe"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <div
                      className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      <Mail className="h-5 w-5" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                        darkMode
                          ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500"
                          : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-indigo-400 focus:border-indigo-400"
                      } focus:outline-none focus:ring-2`}
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className={`w-full px-4 py-3 rounded-lg border ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-indigo-400 focus:border-indigo-400"
                  } focus:outline-none focus:ring-2`}
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-indigo-400 focus:border-indigo-400"
                  } focus:outline-none focus:ring-2`}
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <div className="flex items-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-indigo-500/30"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Team Contacts Section */}
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

      {/* Social Media Section */}
      <section className="container mx-auto px-6 py-20">
        <div
          className={`p-8 rounded-2xl ${
            darkMode ? "bg-gray-800" : "bg-white"
          } shadow-xl`}
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2
                className={`text-2xl md:text-3xl font-bold mb-4 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Connect on{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Social Media
                </span>
              </h2>
              <p
                className={`text-lg ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Follow us for updates, tips, and community discussions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {socialMedia.map((platform, index) => (
                <a
                  key={index}
                  href={platform.url}
                  className={`p-6 rounded-xl transition-all duration-300 ${
                    darkMode
                      ? "bg-gray-700 hover:bg-gray-600"
                      : "bg-gray-100 hover:bg-gray-200"
                  } shadow-md hover:shadow-lg flex items-center`}
                >
                  <div
                    className={`p-3 rounded-lg mr-4 ${
                      darkMode
                        ? "bg-gray-600 text-indigo-300"
                        : "bg-white text-indigo-600"
                    } shadow-sm`}
                  >
                    {platform.icon}
                  </div>
                  <div>
                    <h3
                      className={`font-bold ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {platform.name}
                    </h3>
                    <p
                      className={`text-sm ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {platform.handle}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
                <p
                  className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}
                >
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
    </div>
  );
};

export default Index;
