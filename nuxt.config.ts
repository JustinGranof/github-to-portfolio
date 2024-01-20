// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: { componentIslands: true },
  runtimeConfig: {
    githubClientSecret: "",
    public: {
      githubClientId: "",
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/google-fonts"],
  css: ["~/assets/css/globals.css"],
  app: { head: { title: "GitHub To Portfolio" } },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  googleFonts: {
    display: "swap",
    families: {
      Inter: "200..700",
    },
  },
});
