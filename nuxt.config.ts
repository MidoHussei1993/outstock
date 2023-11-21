// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "bootstrap/scss/bootstrap.scss",
    "vue3-carousel/dist/carousel.css",
    "~/assets/scss/main.scss",
    "primevue/resources/themes/saga-blue/theme.css",
    "primevue/resources/primevue.css",
    "primeicons/primeicons.css",
  ],
  build: { transpile: ["primevue", "pinia"] },
  ssr: false,
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
      },
    ],
    "nuxt-swiper",
    "nuxt-vue3-google-signin",
  ],
  googleSignIn: {
    clientId:
      "693735287406-7bgk29nbiv7ufsa6vj4vn4i2f8rv33k2.apps.googleusercontent.com",
  },
  app: {
    head: {
      title: "Outstock - Clean, Minimal eCommerce Vue Nuxt 3 Template",
      // link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@100;200;300;400;500;600;700&display=swap",
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js",
        },
      ],
    },
  },
  runtimeConfig: {
    API_BASE_URL: process.env.API_BASE_URL,
    public: {
      API_BASE_URL: process.env.API_BASE_URL,
    },
  },
});
