/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'] },
      colors: { brand: { red: '#ee3159', blue: '#3b5fad', deep: '#1f5ca6' } },
    },
  },
  plugins: [],
}
