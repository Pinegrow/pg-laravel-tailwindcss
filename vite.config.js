import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'

import vue from '@vitejs/plugin-vue'
import { liveDesigner } from '@pinegrow/vite-plugin'
import AutoImportComponents from 'unplugin-vue-components/vite'
import AutoImportAPIs from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
import presetIcons from '@unocss/preset-icons'
// import VueDevTools from 'vite-plugin-vue-devtools'

// import { visualizer } from 'rollup-plugin-visualizer'

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

    // For details, refer to https://github.com/antfu/unplugin-vue-components#configuration
    AutoImportComponents({
      /* Please ensure that you update the filenames and paths to accurately match those used in your project. */

      dirs: ['resources/js/Components'],

      // allow auto load markdown components under ./src/components/
      extensions: ['vue', 'md'],

      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],

      // resolvers: [], // Auto-import using resolvers
      dts: 'components.d.ts',
    }),

    // For details, refer to https://github.com/antfu/unplugin-auto-import#configuration
    AutoImportAPIs({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
        // /\.mdx$/, // .mdx
      ],
      imports: [
        'vue',
        'vue-router',
        // 'vue-i18n',
        // 'vue/macros',
        // '@vueuse/head',
        '@vueuse/core',
        'pinia',
      ],
      dirs: [
        /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
        // 'src/composables',
        // 'src/utils',
        // 'src/stores',
      ],
      vueTemplate: true,
      dts: 'auto-imports.d.ts',
    }),

    Unocss({
      presets: [
        presetIcons({
          prefix: 'i-', // default prefix, do not change
        }),
      ],
      content: {
        pipeline: {
          include: ['./resources/**/*'],
        },
      },
    }),

    /* Don't use Vite devtools and Vue devtools at the same time */
    // VueDevTools(),

    liveDesigner({
      iconPreferredCase: 'unocss', // default value (can be removed), unocss by default uses the unocss format for icon names
      devtoolsKey: 'devtools',
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
      tailwindcss: {
        /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
        configPath: 'tailwind.config.js',
        cssPath: 'resources/css/app.css',
        // themePath: false, // Set to false so that Design Panel is not used
        // restartOnConfigUpdate: true,
        restartOnThemeUpdate: true,
      },
      // plugins: [
      //   {
      //     name: 'My Awesome Lib 3.0',
      //     key: 'my-awesome-lib',
      //     pluginPath: fileURLToPath(
      //       new URL('./my-awesome-lib/web-types.json', import.meta.url),
      //     ),
      //   },
      // ],
      //...
    }),
  ],

  // build: {
  //   // Vite uses Rollup under the hold, so rollup options & plugins can be used for advanced usage
  //   rollupOptions: {
  //     plugins: [visualizer()],
  //   },
  // },

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
