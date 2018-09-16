var webpack = require('webpack');

module.exports = {
  siteTitle: '',
  title: 'JGS Technical LLC',
  description: 'Website for jgstechnical.com',
  head: [
    ['link', { rel: 'apple-touch-icon', sizes:"180x180", href: '/favicons/apple-icon-180x180.png' }],
    ['link', { rel: 'icon', sizes:"192x192", href: '/favicons/android-icon-192x192.png' }],
    ['link', { rel: 'icon', sizes:"96x96", href: '/favicons/favicon-96x96.png' }]
  ],
  configureWebpack: (config, isServer) => {
    config.plugins.push(
          new webpack.ProvidePlugin({
            'Holder': 'holderjs',
            'holder': 'holderjs',
            'window.Holder': 'holderjs'
          })
        )
  },
  markdown: {
    config: md => {
      md.use(require('markdown-it-imsize'))
    }
  }
}
