/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#0DB760",
        red: "#FF0000",
        "black-100": "#0B0C0C",
        "black-90": "#11142D",
        "black-20": "#92929D",
        light: "#323433",
        "title-dark": "#E1E1E1",
        "paragraph-dark": "#D1D1D1",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
