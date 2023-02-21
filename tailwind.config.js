module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'app-blue': '#1B4DB1',
        'app-yellow': '#F3F243',
        'app-pink': '#FF64BC',
        'app-black': '#000000',
        'app-blackLight': '#1A1E2E',
        'app-grayDark': '#6E6A6C',
        'app-gray': '#A7A6A7',
        'app-grayLight': '#D9D9D9',
        'app-grayLighter': '#F8F7FA',
        'app-red': '#EF3F47',
      },
      boxShadow: {
        'shadow-1': '0 2px 4px 0 rgba(0 0 0 0.25)',
      },
      fontFamily: {},
    },
    screens: {
      xs: '375px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
  },
  plugins: [],
};
