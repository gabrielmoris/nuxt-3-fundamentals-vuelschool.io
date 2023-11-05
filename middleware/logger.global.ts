// By calling it global I have access to it in all components, otherwise I woul access by:

// <script setup>
// definePageMeta({
//   middleware: ["logger"],
// });
// </script>

//https://nuxt.com/docs/guide/directory-structure/middleware

export default defineNuxtRouteMiddleware((to, from) => {
  console.log("From the middleware: ", to, from);
});
