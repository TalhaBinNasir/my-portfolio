"use client";

import { experiences } from "@/data/experience";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function ExperienceSection() {
  const tabs = Object.keys(experiences);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [openCard, setOpenCard] = useState<number | null>(null);

  return (
    <section id="experience" className="py-20 px-6 sm:px-10 max-w-5xl mx-auto">
      <motion.h2
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h2>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => {
              setActiveTab(tab);
              setOpenCard(null);
            }}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
              tab === activeTab
                ? "bg-accent text-white"
                : "bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Timeline Cards */}
      <div className="relative border-l-2 border-accent pl-6 space-y-6">
        <AnimatePresence>
          {experiences[activeTab].map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white/5 dark:bg-white/10 rounded-lg p-4 shadow-md"
            >
              <button
                onClick={() => setOpenCard(openCard === idx ? null : idx)}
                className="w-full text-left flex justify-between items-center"
              >
                <div>
                  <h3 className="text-lg font-semibold">{exp.title}</h3>
                  <p className="text-sm text-accent">{exp.location}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-300">
                    {exp.duration}
                  </p>
                </div>
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    openCard === idx ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openCard === idx && (
                  <>
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden pl-4 mt-3 list-disc text-sm text-gray-700 dark:text-gray-300 space-y-1"
                    >
                      {exp.points.map((point, pIdx) => (
                        <li key={pIdx}>{point}</li>
                      ))}
                    </motion.ul>
                    {exp?.techStack && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="mt-3 flex flex-wrap gap-2"
                      >
                        {exp.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="bg-accent/10 text-accent dark:bg-accent/20 px-2 py-1 text-xs rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </motion.div>
                    )}
                  </>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
