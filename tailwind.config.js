/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "var(--accent)",
        dark: "#0a0a0a",
        light: "#f4f4f5",
      },
      fontFamily: {
        display: ["Anton", "sans-serif"],
        body: ["Manrope", "sans-serif"],
      },
      fontSize: {
        giant: "14vw",
      },
    },
  },
  plugins: [],
};
