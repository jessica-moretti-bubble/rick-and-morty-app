// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBaseUrl:
        process.env.NUXT_PUBLIC_API_BASE_URL ||
        "https://rickandmortyapi.com/api",
    },
  },

  googleFonts: {
    families: {
      Orbitron: [400, 500, 700],
      "Space Grotesk": [400, 500, 700],
    },
    display: "swap",
    preload: true,
    download: false,
  },

  css: ["@/assets/css/main.css"],

  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
  ],
});
