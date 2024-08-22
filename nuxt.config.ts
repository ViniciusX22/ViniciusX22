// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", '@vueuse/nuxt', 'nuxt-icon', '@nuxtjs/i18n', '@nuxtjs/robots'],
  css: ["~/assets/css/main.css"],
  i18n: {
    fallbackLocale: 'en',
    baseUrl: 'https://viniciusxavier.dev/',
    locales: [
      {
        iso: 'en-US',
        code: 'en',
        name: 'EN',
        file: 'en-US.ts',
      },
      {
        iso: 'pt-BR',
        code: 'pt',
        name: 'PT',
        file: 'pt-BR.ts',
      }
    ],
    langDir: 'i18n',
    lazy: true,
    strategy: 'no_prefix',
    compilation: {
      strictMessage: false,
    },
  },
  routeRules: {
    '/': { prerender: true },
  }
});
