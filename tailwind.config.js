/** @type {import('tailwindcss').Config} */



module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
   extend: {

   fontFamily: {
    fancy: ['Satisfy', 'cursive'],
    general: ['Roboto', 'sans-serif'],
    title: ['Bebas Neue', 'sans-serif'],
    btnFont: ['Barlow', 'sans-serif'],
   },

    colors: {
      primary: {
        DEFAULT: '#CC2829',
      },
      secondary: {
        DEFAULT: '#FDC913',
        dark: '#F5B200',
      },
      tertiary: {
        DEFAULT: '#FFFFFF',
      },
    },

    keyframes: {
      'fade-in': {
        '0%': { opacity: '0.2' },
        '30%': { opacity: '0.3'},
        '50%': { opacity: '0.5' },
        '70%': { opacity: '0.7'},
        '100%': { opacity: '1'},
      },

      'lefttoRight': {
        '0%': { transform: 'translateX(-100%)' },
        
        '100%': { transform: 'translateX(0%)' },
    },

    'righttoLeft': {
      '0%': { transform: 'translateX(100%)' },

      '100%': { transform: 'translateX(0%)' },
      },

      'bounce':{
        animation: 'bounce',
      }




  },

    animation: {
      'fade-in': 'fade-in 0.8s ease-in',
      'lefttoRight': 'lefttoRight 0.3s ease-in-out',
      'righttoLeft': 'righttoLeft 0.3s ease-in',
      'bounce': 'bounce 0.6s',
    }




  }} ,

  plugins: []

}
