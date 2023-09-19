/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        colorBG:'#002339',
        colorTxt:'#019f55',
      },
      typography:{
        Default:{
          css:{
            margin:'0',
            padding:'0',
            fontFamily:'Poppins, sans-serif',
            boxSizing: 'border-box',
          },
        },
      },
    },
  },
  plugins: [],
}

