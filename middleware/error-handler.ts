export default defineNuxtRouteMiddleware((_to, _from) => {
  const nuxtApp = useNuxtApp();

  nuxtApp.hook('vue:error', (error) => {
    console.error('Vue Error:', error);
  });
});
