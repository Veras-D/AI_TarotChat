/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mystic: "#1e1b2f",
        tarotGold: "#e6c200",
      },
      fontFamily: {
        display: ["Cinzel", "serif"],
      }
    },
  },
  plugins: [],
}