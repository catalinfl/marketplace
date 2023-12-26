import daisyui from 'daisyui'
import themes from "daisyui/src/theming/themes"


const light = themes.light

/** @type {import('tailwindcss').Config} */

export default {
  daisyui: {
    themes: [
      {
        lightMod: {
          ...light,
          'primary': '#B0E0E6', 
          'secondary': '#96CDCD',
          'neutral': '#5F9EA0',  
        }
      },
    ]
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
}

