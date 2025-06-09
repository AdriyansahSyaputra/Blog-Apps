import { Check, Clock, Eye, Trash2, User, X } from "lucide-react";

const MobileCard = ({ darkMode, requests, formatDate, openModal, handleAction, handleDelete }) => {
  return (
    <div className="md:hidden">
      {requests.map((request) => (
        <div
          key={request._id}
          className={`p-4 border-b border-gray-200/20 last:border-b-0`}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <div className="ml-3">
                <div
                  className={`font-medium ${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  {request.name}
                </div>
                <div
                  className={`text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {request.email}
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => openModal(request)}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  darkMode
                    ? "hover:bg-gray-700 text-gray-300"
                    : "hover:bg-gray-100 text-gray-600"
                }`}
              >
                <Eye className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleDelete(request._id)}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  darkMode
                    ? "hover:bg-red-900/20 text-red-400"
                    : "hover:bg-red-50 text-red-600"
                }`}
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div
            className={`text-sm mb-3 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            <Clock className="w-4 h-4 inline mr-1" />
            {formatDate(request.authorRequest.requestedAt)}
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => handleAction(request._id, "approved")}
              className="flex-1 inline-flex items-center justify-center px-3 py-2 rounded-lg text-sm font-medium bg-green-500 text-white hover:bg-green-600 transition-colors duration-200"
            >
              <Check className="w-4 h-4 mr-1" />
              Accept
            </button>
            <button
              onClick={() => handleAction(request._id, "rejected")}
              className="flex-1 inline-flex items-center justify-center px-3 py-2 rounded-lg text-sm font-medium bg-red-500 text-white hover:bg-red-600 transition-colors duration-200"
            >
              <X className="w-4 h-4 mr-1" />
              Reject
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileCard;
