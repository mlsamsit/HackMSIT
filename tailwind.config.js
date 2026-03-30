/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "secondary-fixed-dim": "#eec200",
        "surface-container-low": "#faecff",
        "outline": "#856e98",
        "on-primary-fixed-variant": "#390083",
        "primary-dim": "#6411d5",
        "on-tertiary-fixed-variant": "#00377b",
        "outline-variant": "#bda3d1",
        "on-error-container": "#510017",
        "secondary-container": "#fed01b",
        "surface-container": "#f5e2ff",
        "tertiary-fixed-dim": "#73a2ff",
        "tertiary-dim": "#004ca6",
        "on-secondary-fixed-variant": "#645000",
        "surface-dim": "#e8c9ff",
        "on-secondary": "#fff2d3",
        "on-primary-fixed": "#000000",
        "tertiary-container": "#8ab0ff",
        "secondary-fixed": "#fed01b",
        "primary": "#702ae1",
        "inverse-primary": "#a476ff",
        "on-tertiary-fixed": "#00163b",
        "inverse-surface": "#180429",
        "surface": "#fef3ff",
        "tertiary": "#0057bd",
        "background": "#fef3ff",
        "primary-fixed-dim": "#a67aff",
        "on-background": "#3a264b",
        "error": "#b41340",
        "on-primary-container": "#2e006c",
        "on-tertiary-container": "#002e6a",
        "primary-fixed": "#b28cff",
        "secondary-dim": "#614d00",
        "on-secondary-fixed": "#433500",
        "surface-container-highest": "#edd3ff",
        "surface-bright": "#fef3ff",
        "error-container": "#f74b6d",
        "surface-container-high": "#f1daff",
        "inverse-on-surface": "#ad93c0",
        "on-secondary-container": "#594700",
        "surface-tint": "#702ae1",
        "error-dim": "#a70138",
        "surface-variant": "#edd3ff",
        "secondary": "#6f5900",
        "primary-container": "#b28cff",
        "on-surface": "#3a264b",
        "on-primary": "#f8f0ff",
        "surface-container-lowest": "#ffffff",
        "on-tertiary": "#f0f2ff",
        "on-surface-variant": "#69537b",
        "on-error": "#ffefef",
        "tertiary-fixed": "#8ab0ff"
      },
      fontFamily: {
        headline: ["var(--font-spline-sans)", "sans-serif"],
        body: ["var(--font-plus-jakarta)", "sans-serif"],
        label: ["var(--font-plus-jakarta)", "sans-serif"],
        jakarta: ["var(--font-plus-jakarta)", "sans-serif"]
      },
      borderRadius: {
        DEFAULT: "1rem",
        lg: "2rem",
        xl: "3rem",
        full: "9999px"
      }
    }
  },
  plugins: []
};
