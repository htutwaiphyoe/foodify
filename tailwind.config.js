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
        gray: "#E5E5E5",
        placeholder: "#AFB5BF",
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
      20: "2rem",
      normal: "1.6rem",
      sm: "1rem",
    },
    spacing: {
      0.5: "0.5rem",
      1: "1rem",
      1.6: "1.6rem",
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
      50: "50rem",
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
