// Nitro server Is using H3 unde the Hood:
// https://www.jsdocs.io/package/h3#package-index-functions

export default defineEventHandler((event) => {
  return { message: getQuery(event) };
});
