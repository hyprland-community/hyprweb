const { fontFamily } = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/**/*.{astro,html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: { black: "#0D0E0F", white: colors.slate[100] },
      fontFamily: {
        ...fontFamily,
        sans: ["Work Sans Variable", ...fontFamily["sans"]],
        mono: ["IBM Plex Mono", ...fontFamily["mono"]],
      },
      typography: {
        DEFAULT: {
          css: {
            // Github like inline code blocks
            code: {
              padding: "0.2em 0.4em",
              "background-color": colors.slate[800],
              "border-radius": "6px",
              "font-weight": "inherit",
            },
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
  safelist: [],
}
