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
        'black-1': 'rgb(16, 19, 33)'
      },
      fontSize: {
        'h1': '1.4em'
      }
    },
  },
  plugins: [],
}

