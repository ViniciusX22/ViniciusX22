// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", '@vueuse/nuxt', 'nuxt-icon', '@nuxtjs/i18n', '@nuxtjs/robots', 'nuxt-gtag'],
  css: ["~/assets/css/main.css"],

  i18n: {
    defaultLocale: 'en',
    baseUrl: process.env.BASE_URL,
    locales: [
      {
        language: 'en-US',
        code: 'en',
        name: 'EN',
        file: 'en-US.ts',
      },
      {
        language: 'pt-BR',
        code: 'pt',
        name: 'PT',
        file: 'pt-BR.ts',
      }
    ],
    langDir: 'i18n',
    strategy: 'no_prefix',
    compilation: {
      strictMessage: false,
    },
  },

  routeRules: {
    '/hellos/**': { proxy: 'https://hellos-kappa.vercel.app' },
    '/': { prerender: true }
  },

  gtag: {
    enabled: process.env.NODE_ENV === 'production',
    id: 'G-9SPFP9JER1'
  },

  compatibilityDate: '2025-02-24'
});