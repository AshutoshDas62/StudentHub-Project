import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import AetherBackground from "../components/AetherBackground";

export default function Hero() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Smooth transforms
  const textX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -400]),
    { stiffness: 100, damping: 30 }
  );

  const imageX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 400]),
    { stiffness: 100, damping: 30 }
  );

  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [1, 0]),
    { stiffness: 100, damping: 30 }
  );

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      
      {/* Background */}
      <AetherBackground />

      <section className="relative px-6 py-20 min-h-screen flex items-start pt-32">
        <div className="sticky top-32 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <motion.div
            style={{ x: textX, opacity }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight
              text-gray-900 dark:text-white">
              
              Your Academic Success Starts with{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Student Hub
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl max-w-lg
              text-gray-600 dark:text-gray-300">
              The all-in-one platform that helps students organize assignments,
              track deadlines, and achieve excellence.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
              
              <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold 
                hover:bg-blue-700 transition shadow-lg">
                Get Started Free
              </button>

              <button className="border border-gray-300 dark:border-white/20 
                text-gray-800 dark:text-white px-6 py-3 rounded-xl font-semibold 
                hover:bg-gray-100 dark:hover:bg-white/10 transition backdrop-blur-sm">
                Learn More
              </button>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            style={{ x: imageX, opacity }}
            className="relative flex justify-center items-center group"
          >
            {/* Glow */}
            <div className="absolute -inset-2 
              bg-gradient-to-r from-blue-500 via-yellow-400 to-blue-600 
              rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000">
            </div>

            <div className="relative p-[2px] rounded-2xl 
              bg-gradient-to-tr from-blue-500 via-yellow-300 to-blue-600 shadow-2xl">

              <img
                src="https://cdn.ailandingpage.ai/landingpage_io/user-generate/5bd22a05-cd70-43d6-a4b3-0c3955428a9f/5bd22a05-cd70-43d6-a4b3-0c3955428a9f/hero/hero-main-c78b0a0224614e93893bcef65b18c978.png"
                alt="StudentHub Dashboard"
                className="w-full rounded-xl object-cover"
              />
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}