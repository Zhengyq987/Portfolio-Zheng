/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./contact_page/**/*.{html,js}",
  "./home_page/**/*.{html,js}",
  "./skills_page/**/*.{html,js}",
  "./works_page/**/*.{html,js}",
  "./resume_page/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '1280px'
    },
    
    extend: {
      colors:{
        'light-blue': 'rgb(145, 210, 224)',
        'black-1': 'rgb(16, 19, 33)',
        'black-2':'rgb(25, 27, 35)',
        'borderblue':'rgba(145, 209, 224, 0.227)'
      },
      fontSize: {
        'h1': '1.4em',
        'xxs': '10px'
      },
      spacing: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}

