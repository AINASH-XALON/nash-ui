/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        xalonDark: "#0a0a0a",
        xalonBlue: "#1e3a8a",
        xalonAccent: "#6366f1"
      },
      fontFamily: {
        mono: ['"Fira Code"', "monospace"]
      }
    }
  },
  plugins: []
};
