import { Check, Eye, Trash2, User, X } from "lucide-react";

const DesktopTable = ({
  darkMode,
  requests,
  formatDate,
  openModal,
  handleApprove,
  handleReject,
}) => {
  return (
    <div className="hidden md:block overflow-x-auto">
      <table className="w-full">
        <thead className={`${darkMode ? "bg-gray-800/50" : "bg-gray-50/50"}`}>
          <tr>
            <th
              className={`px-6 py-4 text-left text-xs font-medium uppercase tracking-wider ${
                darkMode ? "text-gray-300" : "text-gray-500"
              }`}
            >
              User
            </th>
            <th
              className={`px-6 py-4 text-left text-xs font-medium uppercase tracking-wider ${
                darkMode ? "text-gray-300" : "text-gray-500"
              }`}
            >
              Email
            </th>
            <th
              className={`px-6 py-4 text-left text-xs font-medium uppercase tracking-wider ${
                darkMode ? "text-gray-300" : "text-gray-500"
              }`}
            >
              Request Date
            </th>
            <th
              className={`px-6 py-4 text-left text-xs font-medium uppercase tracking-wider ${
                darkMode ? "text-gray-300" : "text-gray-500"
              }`}
            >
              Actions
            </th>
            <th
              className={`px-6 py-4 text-right text-xs font-medium uppercase tracking-wider ${
                darkMode ? "text-gray-300" : "text-gray-500"
              }`}
            >
              Manage
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200/20">
          {requests.length === 0 ? (
            <tr>
              <td
                colSpan="5"
                className={`px-6 py-4 text-center text-sm font-medium ${
                  darkMode ? "text-gray-300" : "text-gray-500"
                }`}
              >
                No requests found
              </td>
            </tr>
          ) : (
            requests.map((request) => (
              <tr
                key={request._id}
                className={`hover:${
                  darkMode ? "bg-gray-800/30" : "bg-gray-50/30"
                } transition-colors duration-200`}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div className="ml-4">
                      <div
                        className={`text-sm font-medium ${
                          darkMode ? "text-white" : "text-gray-800"
                        }`}
                      >
                        {request.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div
                    className={`text-sm ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {request.email}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div
                    className={`text-sm ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {formatDate(request.authorRequest.requestedAt)}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleApprove(request._id)}
                      className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-green-500 text-white hover:bg-green-600 transition-colors duration-200"
                    >
                      <Check className="w-3 h-3 mr-1" />
                      Accept
                    </button>
                    <button
                      onClick={() => handleReject(request._id)}
                      className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-red-500 text-white hover:bg-red-600 transition-colors duration-200"
                    >
                      <X className="w-3 h-3 mr-1" />
                      Reject
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <div className="flex justify-end space-x-2">
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
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DesktopTable;
