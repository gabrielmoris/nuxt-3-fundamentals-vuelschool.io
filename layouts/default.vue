<template>
  <nav>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink v-if="!user.isLoggedIn" to="/login">Login</NuxtLink>
    <a v-else href="#" @click.prevent="user.isLoggedIn = false">Logout</a>
    <NuxtLink to="/admin">Admin</NuxtLink>
    <NuxtLink to="/movies">Movies</NuxtLink>
    <NuxtLink to="/teams/Team-green/users/65465">Teams</NuxtLink>
    <NuxtLink target="_blank" to="https://www.gabrielcmoris.com">My Website</NuxtLink>
    <NuxtLink to="/spa">SPA</NuxtLink>
    <NuxtLink to="/ssr">SSR</NuxtLink>
    <NuxtLink to="/static">Static</NuxtLink>
    <NuxtLink to="/swr">SWR</NuxtLink>
  </nav>
  <slot></slot>
</template>

<script setup>
const user = useuser();
// If I would like to use Usestate composables/useIsLoggedIn.ts export const useIsloggedIn = () => useState<boolean>("isloggedIn", () => false);

// const isLoggedIn = useIsloggedIn();
</script>

<style scoped>
nav * {
  margin: 0 20px;
}
</style>
