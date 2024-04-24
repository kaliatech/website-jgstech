/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin'

import daisyUiPlugin from 'daisyui'

export default {
  darkMode: 'selector', // or 'media'
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {},
  extend: {},
  plugins: [
    daisyUiPlugin,
    // plugin(function ({ addBase }) {
    //   addBase({
    //     html: { fontSize: '14px' },
    //   })
    // }),
  ],
  daisyui: {
    // https://daisyui.com/docs/config/
    logs: false,
    themes: ['light', 'dark'],
  },
}
