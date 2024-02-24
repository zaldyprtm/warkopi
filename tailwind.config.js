/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {

    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-gradient-mask-image")],
}