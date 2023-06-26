/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          bgLight: "#FAFAFA",
          bgSecond: "#FFFFFF",
          text: "#000000",
        },
        dark: {
          bgDark: "#202D36",
          bgSecond: "#2B3743",
          text: "#FFFFFF",
        },
      },
    },
    screens: {
      tablet: "640px",

      laptop: "1024px",

      desktop: "1280px",
    },
  },
  plugins: [],
};
