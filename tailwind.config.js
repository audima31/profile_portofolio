/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue_dark1: "#030816",
        blue_dark2: "#061838",
        blue_dark3: "#051737",
        blue_dark4: "#071e3f",
        warna1: "#FFFFFF",
        warna2: "#72c1e8",
        warna3: "#a3a7ae",
        warna4: "#4f525a",
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1636px",
      // => @media (min-width: 1636px) { ... }
    },
  },
  plugins: [],
};
