/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{html,js,handlebars}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "chalkboard": "url('../img/chalkboard.png')",
        "whiteboard": "url('../img/whiteboard.png')",
      }),
      fontFamily: {
        sriracha: ['Sriracha', 'cursive', 'sans'],
        marker: ['Permanent Marker', 'sans'],
        reenie: ['Reenie Beanie', 'sans'],
        nanum: ['Nanum Brush Script', 'sans'],
        shadow: ['Shadows Into Light', 'sans'],
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
  darkMode: "class",
};

// npx tailwindcss -i ./views/src/input.css -o ./dist/css/output.css --watch
