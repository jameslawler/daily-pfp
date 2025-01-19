/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
    },
    patterns: {
      opacities: {
        100: "1",
        80: ".80",
        60: ".60",
        40: ".40",
        20: ".20",
        10: ".10",
        5: ".05",
      },
      sizes: {
        1: "0.25rem",
        2: "0.5rem",
        4: "1rem",
        6: "1.5rem",
        8: "2rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        32: "8rem",
      }
    },
    extend: {
      keyframes: {
        score: {
          "0%, 100%": { transform: "scale(1.0)" },
          "50%": { transform: "scale(1.8)" },
        },
        plusone: {
          "0%": { transform: "scale(1.0) translate(-50%, -50%)", opacity: 1 },
          "50%": {
            transform: "scale(2.0) translate(25px, -25px)",
          },
          "100%": {
            transform: "scale(3.0) translate(50px, -50px)",
            opacity: 0,
          },
        },
      },
      animation: {
        score: "score 500ms ease-in-out",
        plusone: "plusone 750ms linear",
      },
    },
  },
  plugins: [
    require('tailwindcss-bg-patterns'),
  ],
};
