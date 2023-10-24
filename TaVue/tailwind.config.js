/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

// module.exports = {
//   content: [
//     "./index.html",
//     "./src/*/.{vue,js,ts,jsx,tsx}",
//   ],
//   theme: {
//       fontFamily: {
//         roboto: ['Roboto Mono', 'monospace'],
//         inter:    ['Inter', 'sans-serif'],
//       },
//       colors: {
//         noir: '#333434',
//         blanc: '#fafafa',
//         grisclair: '#d9d9d9',
//         grisfonce: '#706f6f',
//       },
//     },
//     extend: {},
//   plugins: [],
// }
