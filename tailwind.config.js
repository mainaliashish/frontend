/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        wave: {
          "0%": { transform: "rotate(0deg) translateX(0)" },
          "25%": { transform: "rotate(10deg) translateX(-5px)" },
          "50%": { transform: "rotate(-10deg) translateX(5px)" },
          "75%": { transform: "rotate(10deg) translateX(-5px)" },
          "100%": { transform: "rotate(0deg) translateX(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1.5s ease-out",
        wave: "wave 2s ease-in-out infinite",
      },
    },
  },
  plugins: ["@tailwindcss/forms"],
};
