import { useEffect, useState } from "react";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 transition-colors">

      {/* Header */}
      <div className="bg-white dark:bg-gray-900 shadow p-6 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">
          🎓 StudentHub Dashboard
        </h1>

        <button
          onClick={() => {
            localStorage.removeItem("user");
            window.location.href = "/login";
          }}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {/* Content */}
      <div className="p-6 max-w-7xl mx-auto">

        {/* Welcome */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Welcome, {user?.name || "User"} 👋
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Track your academic progress and tasks here.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {/* Tasks */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-white mb-2">
              📌 Tasks
            </h3>
            <p className="text-3xl font-bold text-blue-600">12</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Pending assignments
            </p>
          </div>

          {/* Progress */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-white mb-2">
              📊 Progress
            </h3>
            <p className="text-3xl font-bold text-green-600">75%</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Overall completion
            </p>
          </div>

          {/* Collaboration */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-white mb-2">
              🤝 Teams
            </h3>
            <p className="text-3xl font-bold text-purple-600">3</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Active groups
            </p>
          </div>

        </div>

        {/* Activity Section */}
        <div className="mt-10 bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-white mb-4">
            📅 Recent Activity
          </h3>

          <ul className="space-y-3 text-gray-600 dark:text-gray-400">
            <li>✔ Completed Math Assignment</li>
            <li>📌 New Task: Science Project</li>
            <li>🤝 Joined Team "AI Project"</li>
          </ul>
        </div>

      </div>
    </div>
  );
}