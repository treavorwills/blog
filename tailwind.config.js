/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{html,js,handlebars}"],
  theme: {
    extend: {},
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
  darkMode: 'class',
}


// npx tailwindcss -i ./views/src/input.css -o ./dist/css/output.css --watch