<script setup lang="ts">
  const colorMode = useColorMode();
  const toggleTheme = () => {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
  };
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <header class="border-b">
      <nav class="container mx-auto flex items-center justify-between p-4">
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
      <div class="container mx-auto p-4 text-center text-sm text-muted-foreground">
        <p>&copy; {{ new Date().getFullYear() }} Your Company. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>
