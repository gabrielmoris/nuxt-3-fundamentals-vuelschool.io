<template>
  <form @submit.prevent="user.login">
    <h1>Login</h1>
    <label> Username </label>
    <input type="text" />
    <label> Password </label>
    <input type="password" />
    <button>Login</button>
  </form>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "plain",
});
// If I want to use useState composables/useIsLoggedIn.ts
// const isLoggedIn = useIsloggedIn();
const user = useuser();
</script>

<style scoped></style>
