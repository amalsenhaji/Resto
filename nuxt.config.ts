// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: ['@vuepic/vue-datepicker']
},
  devtools: { enabled: true },
  modules: ['@nuxtjs/supabase', '@pinia/nuxt', "@nuxtjs/tailwindcss"],
  imports: {
    dirs: ["./stores"],
  },
  pinia: {
    autoImports: ["defineStore", "acceptHMRUpdate"],
  },
  supabase: {
    redirect: false
  },
  plugins: [
    '~/plugins/fontawesome.ts'
  ],
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

})
