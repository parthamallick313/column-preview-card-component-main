/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "375px",
      md: "1024px",
    },
    fontFamily: {
      sans: ["Lexend Deca", "sans-serif"],
      cursive: ["Big Shoulders Display", "cursive"],
    },
    extend: {},
  },
  plugins: [],
};
