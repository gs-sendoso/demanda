module.exports = {
  theme: {
    extend: {
      colors: {
        homeMain: "#FF6347"
      }
    },
    fontFamily: {
      display: ["Open Sans", "sans-serif"],
      sans: ["Lato", "sans-serif"]
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")]
};
