"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-white/70 dark:bg-darkBg/80 backdrop-blur border-b border-gray-200 dark:border-gray-700 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-accent">
          Talha
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#about"
            className="text-sm font-medium hover:text-accent transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-sm font-medium hover:text-accent transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-sm font-medium hover:text-accent transition-colors"
          >
            Contact
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile toggle button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-lightBg dark:bg-darkBg px-4 pb-4"
          >
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-sm font-medium hover:text-accent transition"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-sm font-medium hover:text-accent transition"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-sm font-medium hover:text-accent transition"
            >
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
