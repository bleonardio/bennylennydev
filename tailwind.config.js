/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#305F1F',
        background: '#FFE7B8',
        'primary-hover': '#2B551B',
        'primary-dark': '#143109',
        secondary: '#E26572',
        'secondary-hover': '#DC4958',
        accent: '#3E000C',
        'accent-hover': '#511a24',
        dark: '#3B2C35',
        light: '#FFF1D5',
        'light-hover': '#e6d9c0'
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
}

