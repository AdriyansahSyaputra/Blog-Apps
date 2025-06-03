import { FileText, Users, MessageSquare, Eye } from "lucide-react";

const StatsCards = ({ darkMode }) => {
  const stats = [
    {
      title: "Total Posts",
      value: "1,247",
      change: "+12%",
      icon: FileText,
      color: "blue",
    },
    {
      title: "Active Users",
      value: "3,891",
      change: "+5%",
      icon: Users,
      color: "green",
    },
    {
      title: "Comments",
      value: "892",
      change: "+18%",
      icon: MessageSquare,
      color: "purple",
    },
    {
      title: "Page Views",
      value: "45.2K",
      change: "+25%",
      icon: Eye,
      color: "orange",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        const colorClasses = {
          blue: "from-blue-500 to-blue-600",
          green: "from-green-500 to-green-600",
          purple: "from-purple-500 to-purple-600",
          orange: "from-orange-500 to-orange-600",
        };

        return (
          <div
            key={index}
            className={`p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg ${
              darkMode
                ? "bg-gray-800/50 border-gray-700/50 hover:bg-gray-800/70"
                : "bg-white/50 border-gray-200/50 hover:bg-white/70"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className={`p-3 rounded-xl bg-gradient-to-r ${
                  colorClasses[stat.color]
                }`}
              >
                <Icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-green-500 text-sm font-medium">
                {stat.change}
              </span>
            </div>
            <h3
              className={`text-2xl font-bold mb-1 ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              {stat.value}
            </h3>
            <p
              className={`text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {stat.title}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCards;
