/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/htmlTests/**/*.{html,js}",
"../views/**/*.{handlebars}"],
  theme: {
    extend: {},
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
  },
  plugins: [],
  darkMode: 'class',
}
