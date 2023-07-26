/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'Helvetica', 'Arial', 'sans-serif'],
    },
    fontSize: {
      '4xl': '2.4rem'
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': 'calc(1420px + 4rem)'
      }
    },
    boxShadow: {
      'lg': '0px 3px 30px 0px'
    },
    extend: {
      borderWidth: {
        '3': '3px'
      }
    },
  },
  plugins: [],
}