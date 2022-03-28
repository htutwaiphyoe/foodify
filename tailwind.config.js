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
      normal: "1.6rem",
      sm: "1rem",
    },
    spacing: {
      1: "1rem",
      2: "2rem",
      2: "2rem",
      3: "3rem",
      4: "4rem",
      5: "5rem",
      6: "6rem",
      7: "7rem",
      8: "8rem",
      9: "9rem",
      10: "10rem",
    },
    borderWidth: {
      1: "1px",
    },
    gap: {
      1: "1rem",
      2: "2rem",
      3: "3rem",
      4: "4rem",
      5: "5rem",
    },
    width: {
      80: "80rem",
    },
    lineHeight: {
      1: "1",
      1.2: "1.2",
      1: "1",
    },
  },
  plugins: [],
};
