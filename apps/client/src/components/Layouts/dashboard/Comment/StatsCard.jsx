import {
  AlertTriangle,
  CheckCircle,
  Clock,
  MessageSquare,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

const StatsCards = ({ darkMode, comments }) => {
  const totalComments = comments.length;
  const pendingComments = comments.filter((c) => c.status === "pending").length;
  const approvedComments = comments.filter(
    (c) => c.status === "approved"
  ).length;
  const spamComments = comments.filter((c) => c.status === "spam").length;

  const stats = [
    {
      title: "Total Comments",
      value: totalComments,
      icon: MessageSquare,
      color: "from-blue-500 to-purple-600",
      change: "+12%",
      trending: "up",
    },
    {
      title: "Pending Review",
      value: pendingComments,
      icon: Clock,
      color: "from-yellow-500 to-orange-600",
      change: "+3",
      trending: "up",
    },
    {
      title: "Approved",
      value: approvedComments,
      icon: CheckCircle,
      color: "from-green-500 to-emerald-600",
      change: "+8%",
      trending: "up",
    },
    {
      title: "Spam Detected",
      value: spamComments,
      icon: AlertTriangle,
      color: "from-red-500 to-pink-600",
      change: "-2",
      trending: "down",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        const TrendIcon = stat.trending === "up" ? TrendingUp : TrendingDown;

        return (
          <div
            key={index}
            className={`p-6 rounded-2xl backdrop-blur-xl border transition-all duration-300 hover:scale-105 ${
              darkMode
                ? "bg-gray-900/50 border-gray-700/50"
                : "bg-white/50 border-gray-200/50"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color}`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div
                className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs ${
                  stat.trending === "up"
                    ? "bg-green-500/10 text-green-500"
                    : "bg-red-500/10 text-red-500"
                }`}
              >
                <TrendIcon className="w-3 h-3" />
                <span>{stat.change}</span>
              </div>
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
