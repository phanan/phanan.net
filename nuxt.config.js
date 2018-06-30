module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'phanan.net',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Trang cá nhân của Phan An' },
      { property: 'og:image', content: '/phan-an.jpg' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100&subset=latin,vietnamese,latin-ext' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:100' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#fff' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
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
