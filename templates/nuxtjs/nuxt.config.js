// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
<<<<<<< HEAD
    modules: ['@nuxtjs/tailwindcss'],
    tailwindcss: {
        cssPath: "~/assets/main.css"
    }
=======
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            }
        },
    },

    css: [
        "@/assets/main.css",
    ],
>>>>>>> add-nuxt-support
})
