<template>
  <div>
    <form @submit.prevent="search">
      <input type="text" v-model="query" />
      <button>Search</button>
    </form>

    <ul class="movie-card">
      <li v-for="movie in movies" :key="movie.imdbID">
        <NuxtLink :to="{ name: 'movies-id', params: { id: movie.imdbID } }">
          <img :src="movie.Poster" :alt="movie.title" />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
const query = ref("");
const movies = ref([]);
const search = async () => {
  const { Search } = await $fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=6bc396b1&s=${query.value}`);
  movies.value = Search;
};
</script>

<style scoped>
.movie-card {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
}
</style>
