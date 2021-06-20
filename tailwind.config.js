const colors = require('tailwindcss/colors')


module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    "./.eleventy.js",
    "./src/_includes/**/*.njk",
    "./src/pages/**/*.njk",
    "./src/index.njk",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      pink: colors.pink,
      red: colors.red,
      purple: colors.purple,
    },
    fontFamily: {
      sans: ['Space Grotesk', 'sans-serif'],
      mono: ['Space Mono', 'monospace'],
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}
