/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin'
import defaultTheme from 'tailwindcss/defaultTheme'
import daisyUiPlugin from 'daisyui'

import typographyPlugin from '@tailwindcss/typography'

export default {
  darkMode: 'selector', // or 'media'
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/@kaliatech/shared-astro-tw/src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      container: {
        // or have default horizontal padding
        padding: '1rem',
      },

      colors: {
        primaryt: '#233443',
        primarytdark: '#233443',
        jgsblue: {
          50: '#E7EDF3',
          100: '#CCD9E5',
          200: '#9AB3CB',
          300: '#678DB1',
          400: '#456787',
          500: '#2C4256',
          600: '#233443',
          700: '#1A2733',
          800: '#111A22',
          900: '#090D11',
          950: '#05080A',
        },
      },
      // fontFamily: {
      //   sans: ['Raleway Variable', ...defaultTheme.fontFamily.sans],
      // },
    },
  },
  extend: {},
  plugins: [
    typographyPlugin,
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
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['light'],
          primary: '#233443',
          // secondary: 'teal',
          //['base-100']: 'oklch(var(--b1))',
          //'base-100': 'rgb(20,20,20)',
        },
        dark: {
          ...require('daisyui/src/theming/themes')['dark'],
          primary: '#678DB1',
          // secondary: 'teal',
        },
      },
    ],
  },
}
