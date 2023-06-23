/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,js}"],
  theme: {
    extend: {
      'fontSize' : {
        'vxl' : '10rem'
      },
      'colors':{
        'red-custom':'#fd681b'
      }
    },
  },
  plugins: [],
}

