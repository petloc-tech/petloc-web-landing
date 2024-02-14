/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        unineue: ["Uni Neue", "sans-serif"],
      },
      backgroundImage: () => ({
        "blob-horizontal": "url('/src/images/bg-horizontal.svg')",
        "blob-vertical": "url('/src/images/bg-vertical.svg')",
      }),
      keyframes: {
        "color-bar": {
          "0%": { left: "-100%" },
          "100%": { left: "100%" },
        }
      },
      animation: {
        "color-bar": "color-bar 5s linear infinite",
      },
    },
  },
  plugins: [],
};
