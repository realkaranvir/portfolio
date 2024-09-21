// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: "2024-09-20",
  app: {
    NUXT_APP_BASE_URL: "/portfolio",
    buildAssetsDir: "assetsForBuild",
  },
})
