module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF9900",
        secondary: "#FFF6E9",
        light: "#F8F8F8",
        black: "#010101",
        white: "#FFFFFF",
      },
    },
    container: {
      center: true,
      padding: "2rem",
    },
    fontFamily: {
      rubik: "Rubik, sans-serif",
    },
    fontSize: {
      xl: "5rem",
      lg: "3.6rem",
      md: "2.4rem",
      sm: "1rem",
    },
  },
  plugins: [],
};
