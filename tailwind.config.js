/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#321f48",
        secondary: "#00b3a3",
        black: "#424242",
      },
    },
  },
  plugins: [],
};
