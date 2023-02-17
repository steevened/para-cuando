module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'app-blue': '#1B4DB1',
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
