export default function Features() {
  const features = [
    {
      title: "Assignment Tracking",
      desc: "Organize your tasks, deadlines, and submissions in one place.",
    },
    {
      title: "Collaboration",
      desc: "Work with classmates using shared notes and group projects.",
    },
    {
      title: "Smart Reminders",
      desc: "Never miss deadlines with automated reminders.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Everything You Need for Academic Success
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Student Hub provides powerful tools designed for modern students.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item, i) => (
            <div
              key={i}
              className="p-8 rounded-xl bg-white dark:bg-gray-800 shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
