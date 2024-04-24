/** @type {import('tailwindcss').Config} */

import daisyUiPlugin from 'daisyui'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [daisyUiPlugin],
  daisyui: {
    // https://daisyui.com/docs/config/
    logs: false,
    themes: ['light', 'dark'],
  },
}
