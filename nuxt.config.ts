export default defineNuxtConfig({
  modules: ['nuxt-electron'],
  ssr:true,
  electron: {
    build: [
      {
        // Main-Process entry file of the Electron App.
        entry: 'electron/main.js',
      },
      {
        entry: 'electron/preload.js',
        onstart(args) {
          // Notify the Renderer-Process to reload the page when the Preload-Scripts build is complete, 
          // instead of restarting the entire Electron App.
          args.reload()
        },
      },
    ],
    renderer: {},
  },
})
