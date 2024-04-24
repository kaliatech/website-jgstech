/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin'

import daisyUiPlugin from 'daisyui'

export default {
  darkMode: 'selector', // or 'media'

  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        jgsblue: {
          50: '#FAFCFF',
          100: '#F0F6FF',
          200: '#E0EDFF',
          300: '#D1E3FF',
          400: '#C7DDFF',
          500: '#B6D3FF',
          600: '#61A0FF',
          700: '#0569FF',
          800: '#0045AD',
          900: '#002357',
          950: '#00122E',
        },
      },
    },
  },
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
