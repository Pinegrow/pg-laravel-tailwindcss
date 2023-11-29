# Vue Designer Laravel Jetstream Inertiajs Tailwind CSS - Quick start template

This is a starter template that pre-includes the [Pinegrow Vite Plugin](https://www.npmjs.com/package/@pinegrow/vite-plugin), [Pinegrow Tailwind CSS Plugin](https://www.npmjs.com/package/@pinegrow/tailwindcss-plugin) and other goodies for Vue Designer.

Demo - https://pg-laravel-tailwindcss.netlify.app/

This template has the PHP application server configured (instead of Vite which is used as a middleware) in Pinegrow Vite Plugin, to enable live-designing of Vue components of this laravel/inertia project. It also configures the custom folder setup & the default start-up page of the app.

```js
liveDesigner({
    devServerUrls: {
        local: "http://127.0.0.1:8000/",
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
```

## Vue Designer

A desktop visual editor for Vue apps supporting Mac, Windows, and Linux by [Pinegrow](https://pinegrow.com/). Take it for a free trial at [Vue Designer](https://vuedesigner.com)!

It lets you visually design 🎨 your Vue single file components and boosts your productivity and creativity while building your component-based Vue apps.

It smartly integrates with your ⚡️ [Vite](https://vitejs.dev/) based CLI and provides an amazing developer experience with its powerful visual controls and features.

Clean code 😃, No lock-in - You are in control of your projects and development workflow ❤️

## Try it now!

### 1. Clone to local

[Create a repo from this template on GitHub](https://github.com/pinegrow/pg-laravel-tailwindcss/generate).

(or)

If you prefer to do it manually with the cleaner git history

```bash
npx giget@latest gh:pinegrow/pg-laravel-tailwindcss my-laravel-tailwindcss-app #project-name
cd my-laravel-tailwindcss-app
npm install #or use pnpm
```

(or)

If you prefer a blank template (a single empty home page) instead,

```bash
npx giget@latest gh:pinegrow/pg-laravel-tailwindcss#blank my-laravel-tailwindcss-app #project-name
cd my-laravel-tailwindcss-app
npm install #or use pnpm
```

Then, follow these steps

```bash
composer install | composer update | composer install --ignore-platform-req=ext-iconv #install/update composer
cp .env.example .env # setup envn variables, update db password and other details as required
php artisan key:generate # generate an app key
php artisan migrate # configure the database
```

## 2. Open in Vue Designer

Open your project in Vue Designer and follow the instructions displayed in the Config Panel (that should pop out automatically). Config Panel ⚙️ displays the key packages and the various links to their individual ecosystems and communities.

## Usage

### Start your development & application server

```bash
npm run dev #in first terminal
php artisan serve #in second terminal
```

### Preview

```bash
npm run now # build & preview
```

### Lighthouse

```bash
npm run unlighthouse # Uses npx unlighthouse from https://unlighthouse.dev/ to run lighthouse on entire site (all pages)
```

### Build

```bash
npm run build
```

And you will see the generated file in `dist` that's ready to be served.

### Deploy to Netlify

You can deploy this repo as a site on your own to explore and experiment with, by clicking this button.
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Pinegrow/pg-laravel-tailwindcss)

Check out the [deployment documentation](https://vitejs.dev/guide/static-deploy.html#netlify) for more information.

## Pre-packed

### Framework

- [Laravel](https://laravel.com/) - Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

  - [Simple, fast routing engine](https://laravel.com/docs/routing).
  - [Powerful dependency injection container](https://laravel.com/docs/container).
  - Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
  - Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
  - Database agnostic [schema migrations](https://laravel.com/docs/migrations).
  - [Robust background job processing](https://laravel.com/docs/queues).
  - [Real-time event broadcasting](https://laravel.com/docs/broadcasting).
  - Learn Laravel from the [official documentation](https://laravel.com/docs), [Laravel Bootcamp](https://bootcamp.laravel.com), [Laracasts](https://laracasts.com)

- [Laravel Jetstream](https://jetstream.laravel.com/introduction.html) - This template is one of the Jetstream starter-kit that uses [TailwindCSS](https://tailwindcss.com/docs/guides/vite#vue) and [Inertiajs](https://inertiajs.com/).
  - Jetstream provides the implementation for your application's login, registration, email verification, two-factor authentication, session management, API via Laravel Sanctum, and optional team management features.
  - Refer to the official documentation to learn about all the features.

### Meta Framework (Vue-based)

- [Vite](https://vitejs.dev/) - Vite-powered Vue SPA
  - 👉 Follow the amazing Vue [docs](https://vuejs.org/guide/introduction.html)
  - 🚦 [Vue-Router](https://vuejs.org/guide/introduction.html) for client-side routing. Expressive, configurable, convenient enables snappy navigation.

### UI Frameworks

- [Tailwind CSS](https://tailwindcss.com/docs/guides/vite#vue) - The amazing utility-first CSS framework.

### File-based CMS (markdown)

- [unplugin-vue-markdown](https://github.com/mdit-vue/unplugin-vue-markdown) - file-based CMS powered by Markdown & Vue components. Note: This page is a markdown file 🗒.

### Icons

- [UnoCSS Preset Icons](https://github.com/unocss/unocss/tree/main/packages/preset-icons/) - use over 100,000 open-source [Iconify](https://iconify.design/) icons. Uses the **unocss** format for icon names, for example, `i-mdi-home`.

### Modules/Plugins

- [Pinegrow Vite Plugin](https://www.npmjs.com/package/@pinegrow/vite-plugin) - enables you to live-design your Vue single-file components visually in Vue Designer.
- [Pinegrow Tailwind CSS Plugin](https://www.npmjs.com/package/@pinegrow/tailwindcss-plugin) - via Design Panel, enables visual controls customization (automatic) and theme customization (optional).
- [unplugin-vue-router](https://github.com/posva/unplugin-vue-router) - Next-gen file based routing with type support for Vue Router.
- [vite-plugin-vue-layouts](https://github.com/JohnCampionJr/vite-plugin-vue-layouts) - Router based layout for Vue applications using Vite.
- 📲 [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) - On-demand components auto importing for Vue.
- 📲 [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) - Auto import APIs on-demand for Vite, Webpack and Rollup.
- [VueUse](https://vueuse.org/) - collection of essential Vue composition utilities.
- 🍍 [Pinia](https://pinia.vuejs.org/) stores for global state management. Its light-weight, type-safe, extensible, modular with vue-devtools support.
- [VeeValidate](https://vee-validate.logaretm.com/v4/) takes care of value tracking, validation, errors, submissions and more.

### Devtools

- [Vue Devtools](https://devtools.vuejs.org/guide/installation.html#standalone) - Official devtools that can be used as a standalone app alongside Vue Designer. It's conditionally configured in `main.ts` (only during development).
  - **ACTION REQUIRED**: Currently deactivated. In `main.ts`, uncomment the top devtools related snippet to activate.
- [Vite Devtools](https://github.com/webfansplz/vite-plugin-vue-devtools) - A Vite plugin for Vue that enhances your DX (developer experience) with an amazing set of in-app features. This is an in-app alternative to browser-based/standalone Vue Devtools.
  - **ACTION REQUIRED**: Currently deactivated. In `vite.config.ts`, uncomment VueDevtools.

### VS Code Extensions

- [VS Code Extensions](./.vscode/extensions.json)
  - [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Vue 3 `<script setup>` IDE support
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Coding Style

- Use Composition API with [`<script setup>` SFC syntax](https://vuejs.org/guide/scaling-up/sfc.html)
- [ESLint](https://eslint.org) with [eslint-plugin-vue](https://vuejs.org/guide/scaling-up/tooling.html#linting) - official set of linting rules.
- [Prettier](https://prettier.io) with [@vue/eslint-config-prettier](https://vuejs.org/guide/scaling-up/tooling.html#formatting) - format without conflicting with eslint rules.

### Typescript

This project allows JS, and strict mode is turned off. Update `tsconfig.ts` as required.

```json
{
  "compilerOptions": {
    // ...
    "strict": false,
    "allowJs": true
  }
}
```

## Community

- [Vue Designer Community](https://discord.gg/BYp45Nnu5T)
