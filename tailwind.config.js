/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./assets/hero_page.jpeg')",
        'footer-texture': "url('./assets/about_us.webp')",
      }
    },
  },
  plugins: [],
}