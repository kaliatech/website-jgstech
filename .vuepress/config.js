var webpack = require('webpack');

module.exports = {
  siteTitle: '',
  title: 'JGS Technical LLC',
  description: 'Website for jgstechnical.com',
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
