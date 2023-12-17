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
          'primary': "#667761",
          'secondary': '#545E56',
          'neutral': '#B79492'
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

