const { url } = require('inspector');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero':"url('../public/images/hero.jpg')",
        'hero-mobile':"url('../public/images/hero_mobile.jpg')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}

