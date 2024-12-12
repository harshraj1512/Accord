/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    function ({addUtilities}) {
      const newUtilities = {
        ".scrollbar-thin" : {
          scrollbarWidth : "thin",
          scrollbarColor : "rgb(31 29 29) white"
        },
        ".scrollbar-webkit": {
          "&::-wekit-scrollbar" : {
            width: "8px"
          },
          "&::-webkit-scrollbar-track" : {
            background: "white"
          },
          "&::-webkit-scrollbar-thumb" : {
            backgroundColor: "rgb(31 41 55)",
            borderRadius: "30px",
            border: "1px solid white"
          }
        }
      }

      addUtilities(newUtilities, ["responsive", "hover"])
    }
  ],
  daisyui: {
    themes: ["light"],
  },
}