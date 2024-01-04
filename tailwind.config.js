module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: ["responsive", "hover", "focus", "active"],
      fontFamily: {
        fira: ["FiraSans-Regular"],
      },
      color: {
        "dark-purple":
          "linear-gradient(180.04deg, #101828 1.28%, #0D1B37 99.81%, #0A1E46 99.96%)",
        "black-color": "#101828 100% , #0D1B37 100%, #0A1E46 100%",
      },
    },
  },
  plugins: [],
};
