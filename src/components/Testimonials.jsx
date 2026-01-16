export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            What Students Say
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Trusted by thousands of students worldwide.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {["Aman", "Priya", "Rahul"].map((name, i) => (
            <div
              key={i}
              className="p-8 rounded-xl bg-white dark:bg-gray-800 shadow"
            >
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                “Student Hub completely changed how I manage my studies.”
              </p>
              <h4 className="font-semibold text-gray-900 dark:text-white">
                {name}
              </h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
