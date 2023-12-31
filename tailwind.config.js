/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grayish: "#7A8282"
      },
      fontFamily: {
        rubik: 'Rubik',
        saira: 'Saira Semi Condensed'
      }
    },
  },
  plugins: [],
}

