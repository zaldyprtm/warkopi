/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["home.html"],
  theme: {

    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-gradient-mask-image")],
}