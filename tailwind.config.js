/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/index.html',
    './src/app/**/*.{html, ts}'
  ],
  theme: {
    extend: {

      screens: {
        'sm': {'max': '640px'},
        'md': {'min': '641px'},
      },

      colors: {
        'mi-color-uno': '#ffffff',
        'mi-color-dos': '#003566',
        'mi-color-tres': '#ffc300',
      }
      
    },
  },
  plugins: [],
}