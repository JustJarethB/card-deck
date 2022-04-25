module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      minHeight: {
        'card': '100px'
      },
      height: {
        'controls': '10vh',
        'deck': '50vh',
        'hand': '40vh'
      }
    },
  },
  plugins: [],
}
