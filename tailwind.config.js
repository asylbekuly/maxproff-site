/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      fontSize: {
        h1: ["42px", { fontWeight: "700" }], // Bold 42
        h2: ["18px", { fontWeight: "700" }], // Bold 18
        h3: ["14px", { fontWeight: "700" }], // Bold 14
      },
      colors: {
        
        // Colors
        primary: "#6CAC3D",
        secondary: "#2D4872",
        gray: "#C4C4C4",
        black: "#171616",
        white: "#F2F2F2",
        hoverBlack: "#2D4872", // Черный при hover меняется на синий

        // Buttons
        buttonDefault: "#6CAC3D", // Обычное состояние
        buttonHover: "#82C054", // При наведении
        buttonActive: "#52971F", // При нажатии
      },
    },
  },
  plugins: [],
};
