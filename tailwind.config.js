module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center : true,
      
    },
    extend: {
      colors: {
        'background': "#EEF2FF"
      }
    },
  },
  plugins: [],
}