/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Barlow", "sans-serif"],
      },
    },
  },
  plugins: [],
  experimental: {
    unknownAtRules: "ignore",
  },
};
