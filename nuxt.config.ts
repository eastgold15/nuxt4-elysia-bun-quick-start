// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    "@unocss/nuxt",
    // "@nuxt/devtools",
    "@nuxtjs/color-mode",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "vue-sonner/nuxt",
    "@nuxt/icon",
    'nuxt-elysia'
  ],
  $development: {
    //
    app: {
      head: {
        title: "开发模板",
        titleTemplate: "%s - Nuxt 4 + UnoCSS + VueUse"
      }
    },

    sourcemap: {
      server: true,
      client: true
    }

  },

  $production: {
    app: {
      head: {
        title: "生产模板",
        titleTemplate: "%s - Nuxt 4 + UnoCSS + VueUse",
        viewport: "width=device-width,initial-scale=1",
        link: [
          { rel: "icon", href: "/favicon.ico", sizes: "any" },
          { rel: "icon", type: "image/svg+xml", href: "/nuxt.svg" },
          { rel: "apple-touch-icon", href: "/apple-touch-icon.png" }
        ],
        meta: [
          { name: "viewport", content: "width=device-width, initial-scale=1" },
          { name: "description", content: "Nuxt 4 + UnoCSS + VueUse 模板" },
          { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
          { name: "theme-color", media: "(prefers-color-scheme: light)", content: "white" },
          { name: "theme-color", media: "(prefers-color-scheme: dark)", content: "#222222" }
        ]
      }
    }
    // routeRules: {
    //   "/**": { isr: true },
    // },
  },
  devtools: { enabled: true },

  css: ["@/assets/style/main.css"],
  //
  colorMode: {
    preference: "light",
    fallback: "light",
    classPrefix: "",
    classSuffix: ""
  },

  runtimeConfig: {
    count: 1,
    apiSecret: "", // 可以由 NUXT_API_SECRET 环境变量覆盖
    public: {
      // 可以由 NUXT_BASEURL_DEV 环境变量覆盖
      apiBase: "",
      apiBase_mock: ""
    }
  },
  srcDir: "app",
  serverDir: "server",
  devServer: {
    port: Number.parseInt(process.env.NUXT_PORT!) || 5000
  },
  future: {
    compatibilityVersion: 4
  },
  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true
  },
  compatibilityDate: "2025-05-27",
  nitro: {

    esbuild: {
      options: {
        target: "esnext"
      }
    },
    prerender: {
      crawlLinks: false,
      routes: ["/"],
      ignore: ["/hi"]
    }
  },

  typescript: {
    strict: true,
    tsConfig: {
      compilerOptions: {
        jsx: "preserve"
      }
    }
  },
  nuxtElysia: {
    path: '/api'
  },

  icon: {
    customCollections: [
      {
        prefix: "my-icon",
        dir: "./app/assets/imgs"
      }
    ]
  }

});
