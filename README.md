# Vue School Notes

## Add new page

`npx nuxi add page <pagename>`

## Use async Data to retrieve from apis

The first argument is an unique id ror the caching and the second a callback with the actual function

```
const { data } = useAsyncData(`/movies/${route.params.id}`, () => {
  return $fetch(`https://www.omdbapi.com/?apikey--------&i=${route.params.id}`);
});

```

## Add Middleware

`npx nuxi add middleware`

## Add API

`npx nuxi add api helloWorld`

# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
