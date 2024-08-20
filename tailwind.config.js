/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {
      keyframes: {
        "slide-left": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0%)" },
        },
      },
      animation: {
        "slide-left": "slide-left 5s linear infinite",
      },
    },
  },
  plugins: [],
};
