module.exports = {
  head: {
    title: 'Shaitan Vladimir',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/css/fonts.css' },
      { rel: 'stylesheet', href: '/css/font-awesome/css/font-awesome.min.css' },
      { rel: 'stylesheet', href: '/css/micons/micons.css' },
      { rel: 'stylesheet', href: '/css/base.css' },
      { rel: 'stylesheet', href: '/css/main.css' },
      { rel: 'stylesheet', href: '/css/vendor.css' },
    ],
  },
  loading: { color: '#3B8070' },
  modules: ['@nuxtjs/axios'],
  plugins: [
    '~/plugins/axios'
  ],
  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

