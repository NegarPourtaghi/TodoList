/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
      extend: {
        colors:{
            'new-blue':'#62AFDB'
        }
      },
  },
  darkMode: "class",
  plugins: [require("tw-elements/dist/plugin.cjs"),  require("daisyui")]
  }








