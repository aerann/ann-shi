/** @type {import('tailwindcss').Config} */
const { iconsPlugin, getIconCollections } = require("@egoist/tailwindcss-icons")

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    screens: {
      'xs': "375px",
      '2xs': "620px",
      'sm': "800px",
      'md': "1050px",
      'lg': "1250px",
      'xl': "1500px",
    },
    fontFamily: {
      default: ['Shippori Mincho']
    },
    colors: {
      'white-blue': '#EDF2FC',
      'blue': '#D4E3F5',
      'yellow': '#FBF8B5',
      'grey': "#7F8D9F",
      "dark-grey": "#2F2E2E",
      'red': '#FF0000'
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
      '9xl': '8rem',
    },
    fontWeight: {
      'thin': 100,
      'extralight': 200,
      'light': 300,
      'normal': 400,
      'medium': 500,
      'semibold': 600,
      'bold': 700,
      'extrabold': 800,
      'black': 900,
    },
    extend: {
      spacing: {
        '1/10': '10%', 
        '1/8': '12.5%',
        '95/100': '95%',

      }
    },
  },
  plugins: [
    iconsPlugin({
      collections: getIconCollections(["mdi"])
    })
  ],
}