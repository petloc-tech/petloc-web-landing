/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#F9DA2A",
      },
      fontFamily: {
        unineue: ["Uni Neue", "sans-serif"],
      },
      backgroundImage: () => ({
        "blob-horizontal": "url('../images/bg-horizontal.svg')",
        "blob-vertical": "url('../images/bg-vertical.svg')",
        "blob": "url('../images/bg-blob.png')",
      }),
      keyframes: {
        "color-bar": {
          "0%": { left: "-100%" },
          "100%": { left: "100%" },
        },
      },
      animation: {
        "color-bar": "color-bar 5s linear infinite",
      },
    },
  },
  plugins: [],
};
