/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fredoka', 'ui-rounded', 'system-ui', 'sans-serif'],
        sans: ['Nunito', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        cocoa: {
          DEFAULT: '#5b3a5e',
          light: '#8a6a8c',
        },
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(168, 85, 247, 0.35)',
      },
      keyframes: {
        pop: {
          '0%': { transform: 'scale(1)' },
          '40%': { transform: 'scale(1.35)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        pop: 'pop 0.35s ease-out',
      },
    },
  },
  plugins: [],
};
