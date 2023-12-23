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
          'primary': '#A5CC6B',
          'secondary': "#92BDA3",
          'neutral': '#806D40',
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

