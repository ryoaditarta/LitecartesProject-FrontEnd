/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'cream': '#FFD4B8',
        'litecartesOrange': '#F37704',
        'buttonColor': '#8B340D',
        'optionColor': '#F9BD85;',
      },
    },
  },
  plugins: [],
}

