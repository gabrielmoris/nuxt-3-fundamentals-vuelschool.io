<template>
  <div>Page: Movies</div>
  <h1>{{ $route.params.id }}</h1>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>
