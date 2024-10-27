# project-management-pulse

Pulse Project management system

### Built with
- [Vite](https://vitejs.dev/)
- [Vue 3](https://v3.vuejs.org/)
- [Supabase](https://supabase.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn-vue](https://www.shadcn-vue.com/)
- [Tanstack](https://tanstack.com/)
- [iconify](https://iconify.design/)
  - [Lucide](https://lucide.dev/)

## ENV Variable Dependencies
Need create a .env file and add Supabase URL and Supabase Key in the .env file. 
Use the .env.example file to help get you started.

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
