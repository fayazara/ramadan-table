
export default {
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  env: {
    baseURL: (process.env.NODE_ENV === 'production' ? 'https://ramadan-table.now.sh/' : 'http://localhost:3000')
  },
  loading: { color: '#fff' },
  css: [
  ],
  plugins: [
  ],
  buildModules: [
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/google-analytics', {
      id: 'UA-12301-2'
    }]
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-webfontloader',
  ],
  webfontloader: {
    google: {
      families: ['Josefin+Sans:400,500,700,800?display=swap']
    }
  },
  axios: {
  },
  build: {
    extend(config, ctx) {
    }
  }
}
