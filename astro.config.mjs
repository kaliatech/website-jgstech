import { defineConfig, passthroughImageService } from 'astro/config'
import tailwind from '@astrojs/tailwind'

import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  image: {
    service: passthroughImageService(),
  },

  // vite: {
  //   server: {
  //     fs: {
  //       allow: ['c:/Projects'],
  //     },
  //   },
  // },
})
