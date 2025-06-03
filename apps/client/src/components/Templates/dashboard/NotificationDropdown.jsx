const NotificationDropdown = ({ darkMode, isOpen }) => {
  const notifications = [
    {
      id: 1,
      title: "New comment on your post",
      message: 'John Doe commented on "Getting Started with React"',
      time: "2 minutes ago",
      type: "comment",
      unread: true,
    },
    {
      id: 2,
      title: "New user registered",
      message: "Sarah Smith just joined your blog",
      time: "1 hour ago",
      type: "user",
      unread: true,
    },
    {
      id: 3,
      title: "Post published successfully",
      message: 'Your post "Advanced Node.js" is now live',
      time: "3 hours ago",
      type: "success",
      unread: false,
    },
  ];

  if (!isOpen) return null;

  return (
    <div
      className={`absolute right-0 mt-2 w-80 rounded-xl shadow-lg border backdrop-blur-xl z-50 ${
        darkMode
          ? "bg-gray-800/90 border-gray-700/50"
          : "bg-white/90 border-gray-200/50"
      }`}
    >
      <div className="p-4 border-b border-gray-200/20">
        <h3
          className={`font-semibold ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          Notifications
        </h3>
      </div>
      <div className="max-h-80 overflow-y-auto">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className={`p-4 border-b border-gray-200/10 hover:bg-opacity-50 transition-colors duration-200 ${
              darkMode ? "hover:bg-gray-700/30" : "hover:bg-gray-50/50"
            }`}
          >
            <div className="flex items-start space-x-3">
              <div
                className={`w-2 h-2 rounded-full mt-2 ${
                  notif.unread ? "bg-blue-500" : "bg-transparent"
                }`}
              ></div>
              <div className="flex-1">
                <h4
                  className={`text-sm font-medium ${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  {notif.title}
                </h4>
                <p
                  className={`text-xs mt-1 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {notif.message}
                </p>
                <p
                  className={`text-xs mt-1 ${
                    darkMode ? "text-gray-500" : "text-gray-500"
                  }`}
                >
                  {notif.time}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 border-t border-gray-200/20">
        <button
          className={`w-full text-center text-sm font-medium py-2 rounded-lg transition-colors duration-200 ${
            darkMode
              ? "text-blue-400 hover:bg-gray-700/30"
              : "text-blue-600 hover:bg-blue-50/50"
          }`}
        >
          View all notifications
        </button>
      </div>
    </div>
  );
};

export default NotificationDropdown;
