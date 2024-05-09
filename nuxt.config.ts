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
      title: 'Académie Olé - Apprenez l\'espagnol en ligne au Québec : Cours privés, semi-privés et parascolaires',
      meta: [
        { 
          name: 'description', 
          content: 'Bienvenue à notre académie de langues, votre destination pour apprendre l\'espagnol à Québec! Nos cours en ligne offrent une immersion totale dans la langue et la culture espagnole, depuis le confort de votre foyer. Que vous cherchiez des leçons privées pour un apprentissage personnalisé, des cours semi-privés pour partager l\'expérience avec un ami ou un proche, ou des cours parascolaires pour vos enfants, nous avons la solution pour vous.' 
        },
        {
          hid:'keywords',
          name:'keywords',
          content:'academie de langues, cours en ligne d\'espagnol, cours privés d\'espagnol, cours en groupe d\'espagnol, espagnol Québec, espagnol parascolaire'
        },
        {
            hid:'robots',
            name:'robots',
            content:'index'
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/logo-app.ico' },
        { rel: 'shortcut icon', type: 'image/x-icon', href: '/logo_app.ico' },
      ],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },

  gtag: {
    id: process.env.GTAG_ID,
    enabled: false,
  },

  runtimeConfig: {
    public:{
      domainCookie: process.env.NUXT_PUBLIC_DOMAIN_COOKIE, 
    }
  },
})
