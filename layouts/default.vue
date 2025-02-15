<script setup lang="ts">
  const colorMode = useColorMode();
  const toggleTheme = () => {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
  };
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <header class="border-b">
      <nav class="container flex items-center justify-between p-4 mx-auto">
        <NuxtLink
          to="/"
          class="text-xl font-bold"
          >Your App</NuxtLink
        >
        <div class="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            @click="toggleTheme"
          >
            <Icon
              v-if="colorMode.value === 'dark'"
              name="lucide:sun"
            />
            <Icon
              v-else
              name="lucide:moon"
            />
          </Button>
          <Button
            variant="outline"
            as="a"
            href="https://github.com/mbmarsell/nuxt-template"
          >
            <Icon name="lucide:github" />
            GitHub
          </Button>
        </div>
      </nav>
    </header>

    <main class="flex-1">
      <slot />
    </main>

    <footer class="border-t">
      <div class="container p-4 mx-auto text-sm text-center text-muted-foreground">
        <p>
          &copy; {{ new Date().getFullYear() }} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>
