import { FileText, Users, MessageSquare, Settings } from "lucide-react";

const QuickActions = ({ darkMode }) => {
  return (
    <div
      className={`p-6 rounded-2xl border backdrop-blur-sm ${
        darkMode
          ? "bg-gray-800/50 border-gray-700/50"
          : "bg-white/50 border-gray-200/50"
      }`}
    >
      <h2
        className={`text-xl font-bold mb-4 ${
          darkMode ? "text-white" : "text-gray-800"
        }`}
      >
        Quick Actions
      </h2>
      <div className="space-y-3">
        {[
          { icon: FileText, label: "Create New Post", color: "blue" },
          { icon: Users, label: "Manage Users", color: "green" },
          { icon: MessageSquare, label: "Review Comments", color: "purple" },
          { icon: Settings, label: "Site Settings", color: "gray" },
        ].map((action, index) => {
          const Icon = action.icon;
          return (
            <button
              key={index}
              className={`w-full flex items-center p-3 rounded-lg transition-all duration-200 ${
                darkMode
                  ? "hover:bg-gray-700/50 text-gray-300 hover:text-white"
                  : "hover:bg-gray-100/50 text-gray-600 hover:text-gray-800"
              }`}
            >
              <Icon className="w-5 h-5 mr-3" />
              <span className="font-medium">{action.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;