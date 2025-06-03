import { Heart, Users, Share2, Globe } from "lucide-react";

const ActivityFeed = ({ darkMode }) => {
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
        Recent Activity
      </h2>
      <div className="space-y-3">
        {[
          { icon: Heart, text: 'New comment on "React Hooks"', time: "2m ago" },
          { icon: Users, text: "New user registered", time: "1h ago" },
          { icon: Share2, text: "Post shared 5 times", time: "3h ago" },
          {
            icon: Globe,
            text: "Site visited from 12 countries",
            time: "6h ago",
          },
        ].map((activity, index) => {
          const Icon = activity.icon;
          return (
            <div key={index} className="flex items-center space-x-3">
              <div
                className={`p-2 rounded-lg ${
                  darkMode ? "bg-gray-700/50" : "bg-gray-100/50"
                }`}
              >
                <Icon
                  className={`w-4 h-4 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                />
              </div>
              <div className="flex-1">
                <p
                  className={`text-sm ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {activity.text}
                </p>
                <p
                  className={`text-xs ${
                    darkMode ? "text-gray-500" : "text-gray-500"
                  }`}
                >
                  {activity.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ActivityFeed;
