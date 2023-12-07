/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray':{
          100: '#d3dce6',
          200: '#b9bbbe',
          300: '#ABABAB',
          400: '#575757'
        },
        'gray-light': '#d3dce6',
        'background': {
          100: '#F7F7F7',
          200: '#EBEBEB',
          300: '#CCCCCC',
          400: '#575757',
          500: '#2B2B2B',
        },
        black:{
          300: '#232323',
          500: '#000000',
        },
        error: {
          500: '#FF2619'
        },
        'pink': {
          300: '#A042C9',
        },
        'primary': {
          100: '#4339F2',
          200: '#2B1EF2',
          300: '#211E52',
          400: '#1E1E1E',
          500: '#1E1E1E',
        }
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      extend: {
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require("daisyui")
  ],
}