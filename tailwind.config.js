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
        "smooth-upandown": {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "color-bar": "color-bar 5s linear infinite",
        "smooth-upandown": "smooth-upandown 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
