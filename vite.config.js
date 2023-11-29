import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'

import vue from '@vitejs/plugin-vue'
import { liveDesigner } from '@pinegrow/vite-plugin'

export default defineConfig({
  plugins: [
    laravel({
      input: 'resources/js/app.js',
      ssr: 'resources/js/ssr.js',
      refresh: true,
    }),
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false,
        },
      },
    }),
    liveDesigner({
      iconPreferredCase: 'unocss', // default value (can be removed), unocss by default uses the unocss format for icon names
      devServerUrls: {
        local: 'http://127.0.0.1:8000/', // App-server URL
      },
      dirs: {
        src: 'resources/js/',
        layouts: 'resources/js/Layouts',
        pages: 'resources/js/Pages',
        components: 'resources/js/Components',
      },
      startupPage: '@/Pages/Welcome.vue',
      //...
    }),
  ],
  resolve: {
    alias: {
      /* Must be either an object, or an array of { find, replacement, customResolver } pairs. */
      /* Refer to: https://vitejs.dev/config/shared-options.html#resolve-alias */
      /* Please ensure that you update the filenames and paths to accurately match those used in your project. */

      '@': fileURLToPath(new URL('./resources/js', import.meta.url)),
      '~': fileURLToPath(new URL('./resources/js', import.meta.url)),
      '~~': fileURLToPath(new URL('./resources', import.meta.url)),
    },
  },
})
