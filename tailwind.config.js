/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        gray2:'rgb(30, 30, 30)',
        gray3:'rgb(56, 56, 56)',
        gray4:'rgb(68, 68, 68)',
        gold:'rgb(141, 100, 56)',
        darkred:'rgb(78, 25, 7)',
      }
    },
  },
  plugins: [],
}


// /** @type {import('tailwindcss').Config} */

// module.exports = {
//   content: ["./src/**/*.{html, jsx, tsx, js}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

