/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      background: {
        "main-bg":
          "#003861",
      },
      backgroundImage: {
        "landing-bg":
          "url('/src/assets/images/LandingPage/LandingPage_BG2.png')",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".main-bg": {
          background:
            "#003861",
        },
      });
    },
  ],
}
