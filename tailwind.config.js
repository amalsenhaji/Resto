/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite/**/*.{js,ts}"
  ],
  theme: {
    screens: {
      'sm': '576px',

      'md': '960px',

      'lg': '1440px',
    },
    extend: {
      colors: {
        'primary': '#e10a23',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

