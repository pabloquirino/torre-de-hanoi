/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'main': '1px 1px 5px 2px rgba(0, 0, 0, 0.74)'
      },
      colors: {
        'gray-main': '#808080',
        'condicao': 'rgb(83, 83, 83)',
        'limite': 'rgb(59, 58, 58)',
        'light-gray': 'rgb(170, 168, 168)',
        'lightblue': 'lightblue',
        'bold-gray': 'rgb(87, 86, 86)',
        'manha': 'rgb(28, 51, 150)',
        'tarde': 'rgb(156, 79, 27)',
        'noite': 'rgb(80, 80, 80)',
        'madrugada': 'rgb(0, 0, 0)'
      },
      fontFamily: {
        'arial': 'Arial, Helvetica, sans-serif;',
        'cambria': 'Cambria, Cochin, Georgia, Times, serif;'
      },
      fontSize: {
        '30pt': '30pt'
      },
      spacing: {
        '100px': '100px',
        '200px': '200px',
        '300px': '300px',
        '360px': '360px',
        'ageDetector-main': '400px',
        '150px': '150px',
        '500px': '500px',
        '400px': '400px',
        '250px': '250px'
      }
    },
  },
  plugins: [],
}

