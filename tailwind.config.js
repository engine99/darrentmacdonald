/** @type {import('tailwindcss').Config} */
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
  theme: {
    extend: {
      backgroundImage: {
        
      },
    },
  },
  plugins: [],
}
