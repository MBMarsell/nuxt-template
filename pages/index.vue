<script setup lang="ts">
  const { locale, t } = useI18n({
    useScope: 'local',
  });

  const exampleStore = useExampleStore();

  const features = computed(() => [
    {
      title: t('features.i18n.title'),
      icon: 'lucide:globe',
      description: t('features.i18n.description'),
      action: 'language',
    },
    {
      title: t('features.darkMode.title'),
      icon: 'lucide:moon',
      description: t('features.darkMode.description'),
      action: 'theme',
    },
    {
      title: t('features.state.title'),
      icon: 'lucide:database',
      description: t('features.state.description'),
      action: 'state',
    },
    {
      title: t('features.ui.title'),
      icon: 'lucide:palette',
      description: t('features.ui.description'),
    },
  ]);

  const colorMode = useColorMode();
  const toggleTheme = () => {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
  };
</script>

<template>
  <div class="container px-4 py-12 mx-auto">
    <div class="mb-12 text-center">
      <h1 class="mb-4 text-4xl font-bold">{{ t('welcome') }}</h1>
      <p class="text-xl text-muted-foreground">
        {{ t('description') }}
      </p>
    </div>

    <div class="grid gap-6 mb-12 md:grid-cols-2 lg:grid-cols-4">
      <div
        v-for="feature in features"
        :key="feature.title"
        class="p-6 border rounded-lg"
      >
        <Icon
          :name="feature.icon"
          class="w-8 h-8 mb-4"
        />
        <h2 class="mb-2 font-semibold">{{ feature.title }}</h2>
        <p class="text-sm text-muted-foreground">{{ feature.description }}</p>
        
        <!-- Language Selector -->
        <div
          v-if="feature.action === 'language'"
          class="mt-4"
        >
          <Select
            v-model="locale"
            class="w-full"
          >
            <SelectTrigger>
              <SelectValue :placeholder="t('selectLanguage')" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">{{ t('english') }}</SelectItem>
              <SelectItem value="no">{{ t('norwegian') }}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <!-- Theme Toggle -->
        <Button
          v-if="feature.action === 'theme'"
          class="mt-4"
          @click="toggleTheme"
        >
          {{ colorMode.value === 'dark' ? 'Light Mode' : 'Dark Mode' }}
        </Button>

        <!-- State Management -->
        <div
          v-if="feature.action === 'state'"
          class="flex gap-2 mt-4"
        >
          <Button @click="exampleStore.increment">
            {{ t('features.state.count', { n: exampleStore.count }) }}
          </Button>
          <Button
            variant="outline"
            @click="exampleStore.reset"
          >
            {{ t('features.state.reset') }}
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<i18n lang="json">
  {
    "en": {
      "welcome": "Welcome to the Nuxt 3 starter template",
      "english": "English",
      "norwegian": "Norwegian",
      "description": "A production-ready Nuxt 3 starter template",
      "features": {
        "i18n": {
          "title": "Internationalization",
          "description": "Built-in i18n support with English and Norwegian"
        },
        "darkMode": {
          "title": "Dark Mode",
          "description": "Automatic dark mode with Tailwind CSS"
        },
        "state": {
          "title": "State Management",
          "description": "Pinia store for state management",
          "count": "Count: {n}",
          "reset": "Reset"
        },
        "ui": {
          "title": "UI Components",
          "description": "Shadcn components with Tailwind CSS"
        }
      }
    },
    "no": {
      "welcome": "Velkommen til Nuxt 3 startmalen",
      "english": "Engelsk",
      "norwegian": "Norsk",
      "description": "En produksjonsklar Nuxt 3 startmal",
      "features": {
        "i18n": {
          "title": "Internasjonalisering",
          "description": "Innebygd i18n-støtte med engelsk og norsk"
        },
        "darkMode": {
          "title": "Mørk modus",
          "description": "Automatisk mørk modus med Tailwind CSS"
        },
        "state": {
          "title": "Tilstandshåndtering",
          "description": "Pinia butikk for tilstandshåndtering",
          "count": "Antall: {n}",
          "reset": "Nullstill"
        },
        "ui": {
          "title": "UI-komponenter",
          "description": "Shadcn-komponenter med Tailwind CSS"
        }
      }
    }
  }
</i18n>
