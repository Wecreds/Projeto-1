/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'base': '#eff1f5',
        'black': '#2e3440',
        'orange': '#be6263',
      },
    },
  },
  plugins: [],
};

