/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        title: ["Quicksand", "sans-serif"],
      },
      keyframes: {
        'gradient-move': {
          from: { 'background-position': '0' },
          to: { 'background-position': 'var(--tw-background-size, 100px)' },
        }
      },
      animation: {
        'gradient-move': 'gradient-move 3s linear infinite',
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
