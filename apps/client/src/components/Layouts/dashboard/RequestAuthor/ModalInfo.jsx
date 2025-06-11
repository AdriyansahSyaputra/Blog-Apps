import {
  Briefcase,
  Calendar,
  Check,
  ExternalLink,
  Globe,
  MessageSquare,
  Tag,
  User,
  X,
} from "lucide-react";

const ModalInfo = ({
  darkMode,
  closeModal,
  selectedRequest,
  formatDate,
  getSocialIcon,
  handleApprove,
  handleReject,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={closeModal}
      ></div>
      <div
        className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto backdrop-blur-xl rounded-2xl border shadow-2xl ${
          darkMode
            ? "bg-gray-900/95 border-gray-700/50"
            : "bg-white/95 border-gray-200/50"
        }`}
      >
        {/* Modal Header */}
        <div
          className={`flex items-center justify-between p-6 border-b ${
            darkMode ? "border-gray-700/50" : "border-gray-200/50"
          }`}
        >
          <h2
            className={`text-2xl font-bold ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Author Request Details
          </h2>
          <button
            onClick={closeModal}
            className={`p-2 rounded-lg transition-colors duration-200 ${
              darkMode
                ? "hover:bg-gray-800 text-gray-300"
                : "hover:bg-gray-100 text-gray-600"
            }`}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6">
          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className={`p-4 rounded-xl ${
                darkMode ? "bg-gray-800/50" : "bg-gray-50/50"
              }`}
            >
              <div className="flex items-center mb-2">
                <User
                  className={`w-5 h-5 mr-2 ${
                    darkMode ? "text-blue-400" : "text-blue-600"
                  }`}
                />
                <h3
                  className={`font-semibold ${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  Personal Information
                </h3>
              </div>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                <strong>Name:</strong> {selectedRequest.name}
              </p>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                <strong>Email:</strong> {selectedRequest.email}
              </p>
            </div>

            <div
              className={`p-4 rounded-xl ${
                darkMode ? "bg-gray-800/50" : "bg-gray-50/50"
              }`}
            >
              <div className="flex items-center mb-2">
                <Calendar
                  className={`w-5 h-5 mr-2 ${
                    darkMode ? "text-green-400" : "text-green-600"
                  }`}
                />
                <h3
                  className={`font-semibold ${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  Request Info
                </h3>
              </div>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                <strong>Date:</strong>{" "}
                {formatDate(selectedRequest.authorRequest.requestedAt)}
              </p>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                <strong>Status:</strong>
                <span
                  className={`ml-2 px-2 py-1 rounded-full text-xs ${
                    selectedRequest.authorRequest.status === "pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : selectedRequest.authorRequest.status === "approved"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {selectedRequest.authorRequest.status}
                </span>
              </p>
            </div>
          </div>

          {/* Professional Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className={`p-4 rounded-xl ${
                darkMode ? "bg-gray-800/50" : "bg-gray-50/50"
              }`}
            >
              <div className="flex items-center mb-2">
                <Briefcase
                  className={`w-5 h-5 mr-2 ${
                    darkMode ? "text-purple-400" : "text-purple-600"
                  }`}
                />
                <h3
                  className={`font-semibold ${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  Professional
                </h3>
              </div>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                <strong>Job:</strong> {selectedRequest.authorRequest.job}
              </p>
              {selectedRequest.authorRequest.portfolio && (
                <p
                  className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}
                >
                  <strong>Portfolio:</strong>
                  <a
                    href={selectedRequest.authorRequest.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`ml-2 inline-flex items-center ${
                      darkMode
                        ? "text-blue-400 hover:text-blue-300"
                        : "text-blue-600 hover:text-blue-700"
                    }`}
                  >
                    View Portfolio <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </p>
              )}
            </div>

            <div
              className={`p-4 rounded-xl ${
                darkMode ? "bg-gray-800/50" : "bg-gray-50/50"
              }`}
            >
              <div className="flex items-center mb-2">
                <Tag
                  className={`w-5 h-5 mr-2 ${
                    darkMode ? "text-orange-400" : "text-orange-600"
                  }`}
                />
                <h3
                  className={`font-semibold ${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  Topics
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedRequest.authorRequest.topics.map((topic, index) => (
                  <span
                    key={index}
                    className={`px-2 py-1 rounded-full text-xs ${
                      darkMode
                        ? "bg-gray-700 text-gray-300"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bio */}
          <div
            className={`p-4 rounded-xl ${
              darkMode ? "bg-gray-800/50" : "bg-gray-50/50"
            }`}
          >
            <div className="flex items-center mb-2">
              <MessageSquare
                className={`w-5 h-5 mr-2 ${
                  darkMode ? "text-indigo-400" : "text-indigo-600"
                }`}
              />
              <h3
                className={`font-semibold ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                Bio
              </h3>
            </div>
            <p
              className={`${
                darkMode ? "text-gray-300" : "text-gray-600"
              } leading-relaxed`}
            >
              {selectedRequest.authorRequest.bio}
            </p>
          </div>

          {/* Reason */}
          <div
            className={`p-4 rounded-xl ${
              darkMode ? "bg-gray-800/50" : "bg-gray-50/50"
            }`}
          >
            <div className="flex items-center mb-2">
              <MessageSquare
                className={`w-5 h-5 mr-2 ${
                  darkMode ? "text-pink-400" : "text-pink-600"
                }`}
              />
              <h3
                className={`font-semibold ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                Reason for Application
              </h3>
            </div>
            <p
              className={`${
                darkMode ? "text-gray-300" : "text-gray-600"
              } leading-relaxed`}
            >
              {selectedRequest.authorRequest.reason}
            </p>
          </div>

          {/* Social Links */}
          <div
            className={`p-4 rounded-xl ${
              darkMode ? "bg-gray-800/50" : "bg-gray-50/50"
            }`}
          >
            <div className="flex items-center mb-2">
              <Globe
                className={`w-5 h-5 mr-2 ${
                  darkMode ? "text-cyan-400" : "text-cyan-600"
                }`}
              />
              <h3
                className={`font-semibold ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                Social Links
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {Object.entries(selectedRequest.authorRequest.socialLinks).map(
                ([platform, link]) =>
                  link && (
                    <a
                      key={platform}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center px-3 py-2 rounded-lg transition-colors duration-200 ${
                        darkMode
                          ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                    >
                      {getSocialIcon(platform)}
                      <span className="ml-2 capitalize">{platform}</span>
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  )
              )}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div
          className={`flex flex-col sm:flex-row justify-end gap-3 p-6 border-t ${
            darkMode ? "border-gray-700/50" : "border-gray-200/50"
          }`}
        >
          <button
            onClick={closeModal}
            className={`px-6 py-2 rounded-lg font-medium transition-colors duration-200 ${
              darkMode
                ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Close
          </button>
          <button
            onClick={() => {
              handleReject(selectedRequest._id);
              closeModal();
            }}
            className="px-6 py-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors duration-200"
          >
            <X className="w-4 h-4 inline mr-2" />
            Reject
          </button>
          <button
            onClick={() => {
              handleApprove(selectedRequest._id);
              closeModal();
            }}
            className="px-6 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors duration-200"
          >
            <Check className="w-4 h-4 inline mr-2" />
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalInfo;
