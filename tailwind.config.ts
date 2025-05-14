/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        lightBg: "#f9f9f9",
        darkBg: "#0e0e2c",
        accent: "#6366f1",
        textDark: "#0f172a",
        textLight: "#f1f5f9",
      },
    },
  },
  plugins: [],
};
