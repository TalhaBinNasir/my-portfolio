"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function LandingPage() {
  return (
    <section className="relative flex items-center justify-center min-h-screen px-6 sm:px-12 lg:px-24 bg-lightBg text-textDark dark:bg-darkBg dark:text-textLight transition-colors duration-300">
      <div className="max-w-4xl w-full">
        {/* Your existing motion.h1, motion.p, and buttons */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hey, I’m <span className="text-accent">Talha Bin Nasir</span>.
        </motion.h1>

        <motion.p
          className="mt-6 text-lg sm:text-xl text-muted max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          A full-stack software engineer who loves building modern web & mobile
          apps with elegant code, delightful UI, and smooth UX.
        </motion.p>

        <motion.div
          className="mt-10 flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <a
            href="#contact"
            className="px-6 py-3 bg-accent text-white font-semibold rounded-lg shadow hover:opacity-90 transition"
          >
            Let’s Talk
          </a>
          <a
            href="#projects"
            className="px-6 py-3 border border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-white transition"
          >
            See My Work
          </a>
        </motion.div>
      </div>

      {/* Scroll-down indicator */}
      <motion.a
        href="#projects"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-accent"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" strokeWidth={2.5} />
      </motion.a>
    </section>
  );
}
