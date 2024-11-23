/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
    },
    extend: {
      keyframes: {
        score: {
          "0%, 100%": { transform: "scale(1.0)" },
          "50%": { transform: "scale(1.7)" },
        },
      },
      animation: {
        score: "score 500ms ease-in-out",
      },
    },
  },
  plugins: [],
};
