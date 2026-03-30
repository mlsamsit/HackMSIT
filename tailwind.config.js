/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sandstone: {
          DEFAULT: "#D8C3A5",
          200: "#eddcca",
          800: "#8a7558",
        },
        brick: {
          DEFAULT: "#8C3B2A",
          900: "#3d1810",
        },
        parchment: {
          DEFAULT: "#F5E9D8",
          400: "#e6d5c3",
        },
        "antique-gold": {
          DEFAULT: "#B0905D",
        },
        primary: "#8C3B2A",
        background: "#F5E9D8",
        foreground: "#3d1810",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
    }
  },
  plugins: []
};
