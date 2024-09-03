/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Barlow", "sans-serif"]
      },
      lineHeight: {
        "fullheader": "88px"
      },
      gradientColorStops: theme => ({
        'transparent': 'rgba(255, 255, 255, 0)',
        'full-white': '#FFF',
      }),
      linearGradientDirections: {
        '180': '180deg',
      },
      linearGradientColors: {
        'custom': ['180deg', 'rgba(255, 255, 255, 0)', '#FFF'],
      },
      boxShadow: {
        'product': '0 5px 60px -25px rgba(0, 0, 0, 0.3)',
      },
      hover: {

      },
      screens: {
        sm: { max: '768px' },
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
    },
  },
  plugins: [],
  experimental: {
    unknownAtRules: 'ignore',
  },
}