/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nude: '#f5f0eb',
        charcoal: '#2e2e2e',
        sand: '#e2dcd5',
        stone: '#d8d1ca',
        olive: '#6e6b5e',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}






