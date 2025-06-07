import {
  BookOpen,
  Briefcase,
  Facebook,
  Instagram,
  Link,
  MessageSquare,
  PenTool,
  Twitter,
  User,
} from "lucide-react";

const FormAuthorRequest = ({
  darkMode,
  formData,
  handleChange,
  handleSubmit,
  handleCheckboxChange,
  topics,
}) => {
  return (
    <form onSubmit={handleSubmit} className="p-8">
      {/* Name Field */}
      <div className="mb-6">
        <label
          className={`flex items-center text-sm font-medium mb-2 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          <User className="mr-2 h-4 w-4" />
          Full Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none transition-colors duration-300 ${
            darkMode
              ? "bg-gray-700 border-gray-600 focus:ring-blue-500 focus:border-blue-500 text-gray-100 placeholder-gray-400"
              : "bg-white border-gray-300 focus:ring-blue-400 focus:border-blue-400 text-gray-900 placeholder-gray-500"
          }`}
          placeholder="John Doe"
        />
      </div>

      {/* Bio Field */}
      <div className="mb-6">
        <label
          className={`flex items-center text-sm font-medium mb-2 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          <MessageSquare className="mr-2 h-4 w-4" />
          Short Bio
        </label>
        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          required
          rows={3}
          className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none transition-colors duration-300 ${
            darkMode
              ? "bg-gray-700 border-gray-600 focus:ring-blue-500 focus:border-blue-500 text-gray-100 placeholder-gray-400"
              : "bg-white border-gray-300 focus:ring-blue-400 focus:border-blue-400 text-gray-900 placeholder-gray-500"
          }`}
          placeholder="Tell us about yourself in a few words..."
        />
      </div>

      {/* Job Field */}
      <div className="mb-6">
        <label
          className={`flex items-center text-sm font-medium mb-2 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          <Briefcase className="mr-2 h-4 w-4" />
          Current Job/Profession
        </label>
        <input
          type="text"
          name="job"
          value={formData.job}
          onChange={handleChange}
          required
          className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none transition-colors duration-300 ${
            darkMode
              ? "bg-gray-700 border-gray-600 focus:ring-blue-500 focus:border-blue-500 text-gray-100 placeholder-gray-400"
              : "bg-white border-gray-300 focus:ring-blue-400 focus:border-blue-400 text-gray-900 placeholder-gray-500"
          }`}
          placeholder="Software Engineer"
        />
      </div>

      {/* Topics Field */}
      <div className="mb-6">
        <label
          className={`flex items-center text-sm font-medium mb-2 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          <BookOpen className="mr-2 h-4 w-4" />
          Favorite Topics (Select at least 3)
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {topics.map((topic) => (
            <label
              key={topic}
              className={`flex items-center px-4 py-2 rounded-lg border cursor-pointer transition-colors duration-200 ${
                darkMode
                  ? "border-gray-600 hover:bg-gray-700"
                  : "border-gray-300 hover:bg-gray-100"
              } ${
                formData.topics.includes(topic)
                  ? darkMode
                    ? "bg-blue-900 border-blue-500 text-white"
                    : "bg-blue-100 border-blue-400 text-blue-800"
                  : darkMode
                  ? "text-gray-300"
                  : "text-gray-700"
              }`}
            >
              <input
                type="checkbox"
                checked={formData.topics.includes(topic)}
                onChange={() => handleCheckboxChange(topic)}
                className={`mr-2 h-4 w-4 rounded focus:ring-blue-500 ${
                  darkMode
                    ? "border-gray-500 bg-gray-700 text-blue-500"
                    : "border-gray-300 bg-white text-blue-600"
                }`}
              />
              {topic}
            </label>
          ))}
        </div>
      </div>

      {/* Portfolio Field */}
      <div className="mb-6">
        <label
          className={`flex items-center text-sm font-medium mb-2 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          <Link className="mr-2 h-4 w-4" />
          Portfolio Link
        </label>
        <input
          type="url"
          name="portfolio"
          value={formData.portfolio}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none transition-colors duration-300 ${
            darkMode
              ? "bg-gray-700 border-gray-600 focus:ring-blue-500 focus:border-blue-500 text-gray-100 placeholder-gray-400"
              : "bg-white border-gray-300 focus:ring-blue-400 focus:border-blue-400 text-gray-900 placeholder-gray-500"
          }`}
          placeholder="https://yourportfolio.com"
        />
      </div>

      {/* Social Media Fields */}
      <div className="mb-6">
        <label
          className={`text-sm font-medium mb-2 block ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Social Media Profiles
        </label>

        <div className="space-y-4">
          {/* Twitter */}
          <div>
            <div className="flex items-center mb-1">
              <Twitter
                className={`mr-2 h-4 w-4 ${
                  darkMode ? "text-blue-400" : "text-blue-500"
                }`}
              />
              <span
                className={`text-sm ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Twitter
              </span>
            </div>
            <input
              type="url"
              name="twitter"
              value={formData.socialMedia.twitter}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none transition-colors duration-300 ${
                darkMode
                  ? "bg-gray-700 border-gray-600 focus:ring-blue-500 focus:border-blue-500 text-gray-100 placeholder-gray-400"
                  : "bg-white border-gray-300 focus:ring-blue-400 focus:border-blue-400 text-gray-900 placeholder-gray-500"
              }`}
              placeholder="https://twitter.com/username"
            />
          </div>

          {/* Instagram */}
          <div>
            <div className="flex items-center mb-1">
              <Instagram
                className={`mr-2 h-4 w-4 ${
                  darkMode ? "text-pink-400" : "text-pink-500"
                }`}
              />
              <span
                className={`text-sm ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Instagram
              </span>
            </div>
            <input
              type="url"
              name="instagram"
              value={formData.socialMedia.instagram}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none transition-colors duration-300 ${
                darkMode
                  ? "bg-gray-700 border-gray-600 focus:ring-blue-500 focus:border-blue-500 text-gray-100 placeholder-gray-400"
                  : "bg-white border-gray-300 focus:ring-blue-400 focus:border-blue-400 text-gray-900 placeholder-gray-500"
              }`}
              placeholder="https://instagram.com/username"
            />
          </div>

          {/* Facebook */}
          <div>
            <div className="flex items-center mb-1">
              <Facebook
                className={`mr-2 h-4 w-4 ${
                  darkMode ? "text-blue-400" : "text-blue-600"
                }`}
              />
              <span
                className={`text-sm ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Facebook
              </span>
            </div>
            <input
              type="url"
              name="facebook"
              value={formData.socialMedia.facebook}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none transition-colors duration-300 ${
                darkMode
                  ? "bg-gray-700 border-gray-600 focus:ring-blue-500 focus:border-blue-500 text-gray-100 placeholder-gray-400"
                  : "bg-white border-gray-300 focus:ring-blue-400 focus:border-blue-400 text-gray-900 placeholder-gray-500"
              }`}
              placeholder="https://facebook.com/username"
            />
          </div>

          {/* Medium */}
          <div>
            <div className="flex items-center mb-1">
              <PenTool
                className={`mr-2 h-4 w-4 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              />
              <span
                className={`text-sm ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Medium
              </span>
            </div>
            <input
              type="url"
              name="medium"
              value={formData.socialMedia.medium}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none transition-colors duration-300 ${
                darkMode
                  ? "bg-gray-700 border-gray-600 focus:ring-blue-500 focus:border-blue-500 text-gray-100 placeholder-gray-400"
                  : "bg-white border-gray-300 focus:ring-blue-400 focus:border-blue-400 text-gray-900 placeholder-gray-500"
              }`}
              placeholder="https://medium.com/@username"
            />
          </div>
        </div>
      </div>

      {/* Reason Field */}
      <div className="mb-8">
        <label
          className={`flex items-center text-sm font-medium mb-2 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          <MessageSquare className="mr-2 h-4 w-4" />
          Why do you want to become an author?
        </label>
        <textarea
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          required
          rows={4}
          className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none transition-colors duration-300 ${
            darkMode
              ? "bg-gray-700 border-gray-600 focus:ring-blue-500 focus:border-blue-500 text-gray-100 placeholder-gray-400"
              : "bg-white border-gray-300 focus:ring-blue-400 focus:border-blue-400 text-gray-900 placeholder-gray-500"
          }`}
          placeholder="Share your motivation for joining our writing community..."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className={`w-full py-3 px-6 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-300 ${
          darkMode ? "focus:ring-offset-gray-800" : "focus:ring-offset-white"
        }`}
      >
        Submit Application
      </button>
    </form>
  );
};

export default FormAuthorRequest;
