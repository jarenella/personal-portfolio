/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"], //where u want to use the css file gnerated by tailwind
  theme: {
    extend: {},
  },
  plugins: [],
}


// tailwind console command to automatically update output upon every saved change
// npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch