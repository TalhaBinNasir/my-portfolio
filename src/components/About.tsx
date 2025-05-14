"use client";

import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="min-h-screen px-6 py-20 sm:px-10 lg:px-20">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-accent">
          About Me
        </h2>

        <p className="text-base md:text-lg text-textDark dark:text-textLight leading-relaxed">
          I'm <span className="font-semibold text-accent">Talha Bin Nasir</span>
          , a passionate software engineer with 3+ years of experience building
          full-stack apps and mobile-first solutions. I specialize in
          <span className="text-accent">
            {" "}
            React, Next.js, React Native, TypeScript, and Node.js
          </span>
          . My focus is on building performant, scalable, and user-focused
          products.
        </p>

        <p className="mt-4 text-base md:text-lg text-textDark dark:text-textLight leading-relaxed">
          I love solving real-world problems through code, and I'm always on the
          lookout for the next challenge to grow and make an impact.
        </p>

        {/* Skills */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[
            "React",
            "Next.js",
            "React Native",
            "Node.js",
            "TypeScript",
            "PostgreSQL",
            "MongoDB",
            "Python",
            "GCP",
            "AWS",
          ].map((skill, index) => (
            <motion.div
              key={skill}
              className="bg-accent/10 text-accent py-2 px-4 rounded-full text-sm font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <motion.a
            href="/Talha - Resume.pdf"
            download
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-accent text-white font-semibold shadow-md transition-colors hover:bg-indigo-600"
          >
            <Download size={18} />
            Download Resume
          </motion.a>
          <motion.a
            href="/Talha - Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-lg border-2 border-accent text-accent font-semibold transition-colors hover:bg-accent hover:text-white"
          >
            <ExternalLink size={18} />
            View Online
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
