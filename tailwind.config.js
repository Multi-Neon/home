/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html"
  ],
  theme: {
    extend: {
      colors: {
        back: 'rgba(23, 23, 23, .99)',
        forground: 'rgba(38, 38, 38)',
        forground_hover: 'rgba(44, 44, 44)',
        light_back: 'rgb(255, 255, 255)',
        border_color: 'rgba(255, 255, 255, .1)'
      }
    },
  },
  plugins: [],
}

