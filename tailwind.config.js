/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html}',
    './src/index.html'
  ],
  theme: {
    extend: {
      screens:{
        desktop:'1280px',
        laptop:'1024px',
        tab:'980px',
      },
      colors:{
        primary: "hsl(14, 86%, 42%)",
        secondary: "hsl(159, 69%, 38%)",

        accent50: 'hsl(20, 50%, 98%)',
        accent100: 'hsl(13, 31%, 94%)',
        accent300: 'hsl(14, 25%, 72%)',
        accent400: 'hsl(7, 20%, 60%)',
        accent500: 'hsl(12, 20%, 44%)',
        accent900: 'hsl(14, 65%, 9%)'
      }
    },
  },
  plugins: [],
}

