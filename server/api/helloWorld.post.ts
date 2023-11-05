// Nitro server Is using H3 unde the Hood:
// https://www.jsdocs.io/package/h3#package-index-functions

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  return { message: "this is a POST", youSent: body };
});
