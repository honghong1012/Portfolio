module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        "primary-100": "#4c4c4c",
        "primary-200": "rgb(252, 89, 97)",
        "primary-300": "#B2B2B2",
        "primary-400": "#fff0e5"
      },
      boxShadow: {
        "primary-yellow": "-10px 10px 0px 5px rgba(255,211,0,1)",
        "secondary-yellow": "0px 0px 15px 4px rgba(255,211,0,1)"
      }
    },
  },
  plugins: [],
}
