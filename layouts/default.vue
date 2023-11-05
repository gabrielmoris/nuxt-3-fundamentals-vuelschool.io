<template>
  <nav>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/login">Login</NuxtLink>
    <NuxtLink to="/admin">Admin</NuxtLink>
    <NuxtLink to="/movies">Movies</NuxtLink>
    <NuxtLink to="/teams/Team-green/users/65465">Teams</NuxtLink>
    <NuxtLink target="_blank" to="https://www.gabrielcmoris.com">My Website</NuxtLink>
  </nav>
  <slot></slot>
</template>

<script setup lang="ts"></script>

<style scoped></style>
