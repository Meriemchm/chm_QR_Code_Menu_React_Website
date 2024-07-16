/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2AB097",
        second: "#DBD282",
        third: "#F7941D",
        thirdprimary: "#FCB040",
        four:"#E5287A",
      },
    },
  },
  plugins: [],
};
