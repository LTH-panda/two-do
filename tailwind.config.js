/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["GangwonEduPowerExtraBoldA"],
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 0.6 },
        },
        slideUp: {
          from: { opacity: 0, bottom: "-3rem" },
          to: { opacity: 1, bottom: 0 },
        },
        scaleUp: {
          from: { transform: "scale(0.5)" },
          to: { transform: "scale(1)" },
        },
      },
      animation: {
        fadeIn: "fadeIn .3s",
        slideUp: "slideUp .3s",
        scaleUp: "scaleUp .3s",
      },
    },
  },
  plugins: [],
};
