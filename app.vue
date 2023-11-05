<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
//https://nuxt.com/docs/api/composables/use-head
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - My Movies Site` : "My Movies Site";
  },
});
</script>
