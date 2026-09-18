/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#06b6d4',
        secondary: '#1e3a8a',
      },
      fontFamily: {
        logo: ['"Allura"', 'cursive'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.9' },
          '50%': { transform: 'translateY(10px)', opacity: '0.4' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        bounceSoft: 'bounceSoft 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
