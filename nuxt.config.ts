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

  modules: ['nuxt-icon', 'nuxt-gtag', '@nuxtjs/sitemap'],

  ssr: true,

  app: {
    head: {
      title: "Cours d'espagnol en ligne | Académie Olé | Privés, semi-privés et parascolaires",
      meta: [
        { name: 'description', content: "Apprenez l'espagnol en ligne avec Académie Olé. Cours privés, semi-privés et parascolaires pour tous les niveaux. Professeurs natifs et approche interactive." },
        { name: 'keywords', content: "cours d'espagnol en ligne, apprendre espagnol, cours espagnol privé, cours espagnol semi-privé, cours espagnol parascolaire, Académie Olé" },

        { property: 'og:title', content: "Cours d'espagnol en ligne | Académie Olé" },
        { property: 'og:description', content: "Découvrez nos cours d'espagnol privés, semi-privés et parascolaires en ligne. Flexibilité, interactivité, immersion culturelle. Commencez aujourd'hui avec Académie Olé !" },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://www.academieole.com/' },
        { property: 'og:image', content: 'https://www.academieole.com/images/og-academie-ole.jpg' }, // <-- Image OpenGraph

        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: "Cours d'espagnol en ligne | Académie Olé" },
        { name: 'twitter:description', content: "Apprenez l'espagnol depuis chez vous avec nos cours privés, semi-privés et parascolaires." },
        { name: 'twitter:image', content: 'https://www.academieole.com/images/og-academie-ole.jpg' } // <-- Image Twitter
      ],
      link: [
        { rel: 'canonical', href: 'https://www.academieole.com/' },
        { rel: 'icon', type: 'image/x-icon', href: '/logo-app.ico' },
        { rel: 'shortcut icon', type: 'image/x-icon', href: '/logo_app.ico' },
      ]
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

  sitemap: {
    siteUrl: 'https://www.academieole.com', // Remplace par ton vrai domaine
    trailingSlash: true, // Ajoute un / à la fin des URL (meilleur pour SEO)
    defaults: {
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date()
    },
    routes: [
      '/', 
      '/cours', 
      '/cours/prives',
      '/cours/semi-prives',
      '/cours/parascolaires',
      '/apropos',
      '/contact'
    ]
  }
})
