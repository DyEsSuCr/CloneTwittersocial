/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: '#1DA1F2',
        black: '#14171A',
        'dark-gray': '#657786',
        'light-gray': '#AAB8C2',
        'ex-gray': '#E1E8ED',
        'exe-gray': '#F5F8FA'
      }
    }
  },
  plugins: []
}
