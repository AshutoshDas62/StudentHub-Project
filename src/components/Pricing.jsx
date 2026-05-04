import { motion } from "framer-motion";

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      features: ["✔ Task tracking", "✔ Reminders", "✖ Collaboration"],
    },
    {
      name: "Pro",
      price: "$9/mo",
      features: [
        "✔ Everything in Free",
        "✔ Collaboration",
        "✔ Priority support",
      ],
    },
    {
      name: "Team",
      price: "$19/mo",
      features: [
        "✔ Group projects",
        "✔ Admin controls",
        "✔ Unlimited members",
      ],
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <motion.div
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Simple & Transparent Pricing
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Choose a plan that fits your academic needs.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}

              className="
                group
                p-8 rounded-xl border-2
                bg-white dark:bg-gray-900
                border-gray-200 dark:border-gray-800
                text-gray-900 dark:text-white

                transition-all duration-300 ease-in-out
                cursor-pointer transform

                /* SAME HOVER FOR BOTH MODES */
                hover:scale-105
                hover:!bg-blue-600
                hover:!border-yellow-400
                hover:shadow-[0_0_25px_rgba(250,204,21,0.8)]
              "
            >
              {/* Title */}
              <h3 className="text-xl font-semibold mb-4 transition-colors duration-300 group-hover:text-white">
                {plan.name}
              </h3>

              {/* Price */}
              <p className="text-4xl font-bold mb-6 transition-colors duration-300 group-hover:text-white">
                {plan.price}
              </p>

              {/* Features */}
              <ul className="space-y-3 text-gray-600 dark:text-gray-400 transition-colors duration-300 group-hover:text-white">
                {plan.features.map((f, idx) => (
                  <li key={idx}>{f}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}