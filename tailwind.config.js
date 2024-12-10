/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        customGray: '#5e5e5e',
        blacknav: {
          DEFAULT: '#121212',
          24: ('18, 18, 18, 0.24')
      },

    },
  },
  plugins: [],
}
}