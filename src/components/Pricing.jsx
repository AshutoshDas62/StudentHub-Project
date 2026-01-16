export default function Pricing() {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Simple & Transparent Pricing
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Choose a plan that fits your academic needs.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Free */}
          <div className="p-8 border rounded-xl dark:border-gray-800">
            <h3 className="text-xl font-semibold mb-4">Free</h3>
            <p className="text-4xl font-bold mb-6">$0</p>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li>✔ Task tracking</li>
              <li>✔ Reminders</li>
              <li>✖ Collaboration</li>
            </ul>
          </div>

          {/* Pro */}
          <div className="p-8 rounded-xl bg-blue-600 text-white shadow-lg scale-105">
            <h3 className="text-xl font-semibold mb-4">Pro</h3>
            <p className="text-4xl font-bold mb-6">$9/mo</p>
            <ul className="space-y-3">
              <li>✔ Everything in Free</li>
              <li>✔ Collaboration</li>
              <li>✔ Priority support</li>
            </ul>
          </div>

          {/* Team */}
          <div className="p-8 border rounded-xl dark:border-gray-800">
            <h3 className="text-xl font-semibold mb-4">Team</h3>
            <p className="text-4xl font-bold mb-6">$19/mo</p>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li>✔ Group projects</li>
              <li>✔ Admin controls</li>
              <li>✔ Unlimited members</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
