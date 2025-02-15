export default defineNuxtRouteMiddleware((to, from) => {
  const nuxtApp = useNuxtApp();

  nuxtApp.hook('vue:error', (error) => {
    console.error('Vue Error:', error);
  });
})