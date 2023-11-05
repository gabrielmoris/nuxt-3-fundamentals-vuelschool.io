<template>
  <div>
    <pre>{{ data }}</pre>
  </div>
</template>

<script setup>
const route = useRoute();
// https://nuxt.com/docs/api/composables/use-fetch#params
const { data } = await useFetch(`http://www.omdbapi.com/?apikey=6bc396b1&i=${route.params.id}`, {
  pick: ["Plot", "Title", "Error", "Poster"],
  key: `/movies/${route.params.id}`,
});

if (data.value.Error === "Incorrect IMDb ID.") {
  showError({ statusCode: 404, statusMessage: "Page Not Found." });
}

// const { data } = useAsyncData(
//   `/movies/${route.params.id}`,
//   () => {
//     return $fetch(`http://www.omdbapi.com/?apikey=6bc396b1&i=${route.params.id}`);
//   },
//   {
//     // https://nuxt.com/docs/api/composables/use-async-data#params
//     pick: ["Plot", "Title"],
//   }
// );

//https://nuxt.com/docs/api/composables/use-head
useHead({
  title: data.value.Title,
  meta: [
    { name: "description", content: data.value.Plot },
    {
      property: "og:description",
      content: data.value.Plot,
    },
    {
      property: "og:image",
      content: data.value.Poster,
    },
    { name: "twitter:card", content: `summary_large_image` },
  ],
});
</script>
