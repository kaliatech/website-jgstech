export default {
  target: 'static',
  // Headers of the page
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  telemetry: false,

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/scss/main.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',

    // https://github.com/nuxt-community/style-resources-module/
    '@nuxtjs/style-resources',

    // https://google-analytics.nuxtjs.org/
    '@nuxtjs/google-analytics',
  ],

  googleAnalytics: {
    id: 'UA-8344371-1',
    dev: process.env.NODE_ENV !== 'production',
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',

    // https://go.nuxtjs.dev/bootstrap
    ['bootstrap-vue/nuxt'],

    'nuxt-fontawesome',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  fontawesome: {
    component: 'fa',
    imports: [
      // import whole set
      // {
      //   set: '@fortawesome/free-solid-svg-icons',
      //   icons: ['fas']
      // },
      // import 2 icons from set
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['faGlobe'],
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['faLinkedin', 'faGithub', 'faStackOverflow', 'faTwitter'],
      },
    ],
  },
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
}
