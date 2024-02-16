/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customGreen: "#00B796",
        customGray: "#F3F3F3",
        GrayShade1: "#E4E4E4",
      },
    },
  },
  plugins: [],
};
