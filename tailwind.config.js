/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // safelist: [  
  //   {
  //     pattern: /./, Use this to build & include all styles
  //   },
  // ],
  plugins: [
    require("nightwind"),
    require('tailwindcss-fluid-type'),
  ],
  darkMode: "class"
}
