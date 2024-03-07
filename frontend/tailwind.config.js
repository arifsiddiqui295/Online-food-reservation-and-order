/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'animate-bounce': 'bounce 3s linear 1',
      }
    },
  },
  
  plugins: [],
}