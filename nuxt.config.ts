// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],

  $production: {
    routeRules: {
      '/**': { isr: true }
    }
  },

  $development: {
    //
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  modules: ['nuxt-icon', 'nuxt-gtag'],

  app: {
    head: {
      title: 'Académie Olé - Cours d\'espagnol en ligne',
      meta: [
        { name: 'description', content: 'Apprenez l\'espagnol avec notre académie basée à Québec. Profitez de cours en ligne de haute qualité pour maîtriser cette langue vibrante depuis chez vous. Rejoignez-nous pour découvrir une nouvelle culture et élargir vos horizons linguistiques.' },
        {
          hid:'keywords',
          name:'keywords',
          content:'cours en ligne d\'espagnol, cours en groupe d\'espagnol, espagnol Québec, espagnol parascolaire'
        },
        {
            hid:'robots',
            name:'robots',
            content:'index'
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/logo-app.ico' }
      ],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },

  gtag: {
    id: 'G-WBREWTBT6B',
    enabled: false,
  }
})
