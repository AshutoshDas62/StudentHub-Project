import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative bg-white dark:bg-[#0b1220] py-24 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-[1.1]">
                Ready to Transform Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                  Academic Journey?
                </span>
              </h2>

              <p className="text-gray-600 dark:text-gray-400 text-lg max-w-xl leading-relaxed">
                Join thousands of students who are already using Student Hub to
                organize their studies, connect with peers, and achieve academic
                success.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-blue-500/25 transition-all"
              >
                Get Started Free
              </motion.button>

              <motion.button 
                whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                className="border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white px-8 py-4 rounded-xl font-semibold backdrop-blur-sm transition-all"
              >
                Learn More
              </motion.button>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              No credit card required · Free forever plan available
            </div>
          </motion.div>

          {/* RIGHT IMAGE WITH GLOW & BADGE */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Background Accent Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 blur-2xl rounded-3xl" />

            <div className="relative overflow-hidden rounded-3xl shadow-2xl aspect-[4/3] border border-white/5">
              <img
                // Optimized Unsplash URL for fast loading
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
                alt="Students collaborating"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>

            {/* FLOATING BADGE - Glassmorphism style */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-8 -left-8 bg-white/80 dark:bg-[#141c2f]/80 backdrop-blur-xl px-6 py-4 rounded-2xl flex items-center gap-4 shadow-2xl border border-white/20 dark:border-white/5"
            >
              <div className="h-12 w-12 rounded-full bg-blue-500 shadow-inner flex items-center justify-center text-white text-xl">
                ★
              </div>

              <div>
                <p className="text-gray-900 dark:text-white font-bold text-lg leading-none">
                  50,000+
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                  Active Students
                </p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}