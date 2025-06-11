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
        accent: '#A37CC3',
        'accent-hover': '#8450AE',
        dark: '#3B2C35',
        light: '#fff',
        'light-hover': '#e5e5e5'
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
}

