export default function Hero() {
  return (
    <section className="bg-linear-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">

        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Your Academic Success Starts with{" "}
            <span className="text-blue-600 dark:text-blue-400">Student Hub</span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
            The all-in-one platform that helps students organize assignments,
            track deadlines, collaborate with peers, and achieve excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-blue-600 text-white py-4 px-8 rounded-lg text-lg font-semibold hover:bg-blue-700">
              Get Started Free
            </button>
            <button className="border-2 border-gray-300 py-4 px-8 rounded-lg text-lg">
              Learn More
            </button>
          </div>
        </div>

        <img
            src="https://cdn.ailandingpage.ai/landingpage_io/user-generate/5bd22a05-cd70-43d6-a4b3-0c3955428a9f/5bd22a05-cd70-43d6-a4b3-0c3955428a9f/hero/hero-main-c78b0a0224614e93893bcef65b18c978.png"
            alt="Hero"
            className="w-full rounded-2xl shadow-lg"
        />
      </div>
    </section>
  );
}
