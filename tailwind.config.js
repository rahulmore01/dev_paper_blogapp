/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        bgBlue: "#3E6FFF",
        // card related
        cTitle: "#364153",
        cBody: "#677489",
        cTag: "#F0F6FE",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
