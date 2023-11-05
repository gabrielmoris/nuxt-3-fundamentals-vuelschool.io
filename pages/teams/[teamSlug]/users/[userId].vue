<template>
  <p>I'm on the team {{ $route.params.teamSlug }} and my yser ID is {{ $route.params.userId }}</p>
  <p>Computed: {{ message }}</p>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const message = computed(() => {
  return `I'm on the team ${route.params.teamSlug} and my yser ID is ${route.params.userId}`;
});
</script>
