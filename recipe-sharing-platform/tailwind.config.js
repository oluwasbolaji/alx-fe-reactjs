/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",           // root index.html
    "./public/index.html",    // public folder index.html
    "./src/**/*.{js,jsx,ts,tsx}" // all React components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
