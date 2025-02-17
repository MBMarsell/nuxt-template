<script setup lang="ts">
  const { locale, t } = useI18n({
    useScope: 'local',
  });

  const exampleStore = useExampleStore();

  // Array of fun emojis to randomly select from
  const emojis = [
    '🚀',
    '🎨',
    '🎮',
    '🎵',
    '🌈',
    '✨',
    '🎪',
    '🎭',
    '🎯',
    '🎲',
    '🎸',
    '🎺',
    '😬',
    '🌟',
    '🎩',
    '🎡',
    '🎠',
    '🎢',
    '🎬',
    '🎧',
    '🎹',
    '🎷',
    '🎻',
    '🎈',
    '🎉',
    '🎊',
    '🎌',
    '🎎',
    '🎏',
    '🎐',
    '🎑',
    '🎃',
    '🌞',
    '🌙',
    '⭐',
    '🌠',
    '🌍',
    '🦄',
    '🐉',
    '🦋',
    '🐬',
    '🌺',
    '😊',
    '😄',
    '😃',
    '😅',
    '😂',
    '🤣',
    '😇',
    '😉',
    '😍',
    '🥰',
    '😎',
    '🤩',
    '😋',
    '😜',
    '🤪',
    '😝',
    '🤗',
    '🤓',
    '😌',
    '😏',
  ];

  const getRandomEmoji = () => emojis[Math.floor(Math.random() * emojis.length)];

  // Initialize items with emojis
  const items = ref([
    { id: 1, text: 'Item 1', emoji: getRandomEmoji() },
    { id: 2, text: 'Item 2', emoji: getRandomEmoji() },
    { id: 3, text: 'Item 3', emoji: getRandomEmoji() },
    { id: 4, text: 'Item 4', emoji: getRandomEmoji() },
    { id: 5, text: 'Item 5', emoji: getRandomEmoji() },
    { id: 6, text: 'Item 6', emoji: getRandomEmoji() },
  ]);
  const nextId = ref(11);

  const addItem = () => {
    items.value.push({
      id: nextId.value,
      text: `Item ${nextId.value}`,
      emoji: getRandomEmoji(),
    });
    nextId.value++;
  };

  const removeItem = (item: { id: number; text: string; emoji: string }) => {
    const index = items.value.findIndex((i) => i.id === item.id);
    if (index > -1) {
      items.value.splice(index, 1);
    }
  };

  const shuffleList = () => {
    items.value = items.value.sort(() => Math.random() - 0.5);
  };

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

  const draggingId = ref<number | null>(null);
  const containerRef = ref<HTMLElement | null>(null);

  const onDragStart = (id: number) => {
    draggingId.value = id;
  };

  const onDragEnd = () => {
    draggingId.value = null;
  };

  useDropZone(containerRef, {
    onDrop: (files: File[] | null, event: DragEvent) => {
      if (draggingId.value !== null) {
        const draggedItem = items.value.find((item) => item.id === draggingId.value);
        const currentIndex = items.value.findIndex((item) => item.id === draggingId.value);

        // Get the target element from the drop event
        const target = event.target as HTMLElement;
        const targetItem = target.closest('li');
        if (targetItem) {
          const targetId = Number(targetItem.getAttribute('data-id'));
          const targetIndex = items.value.findIndex((item) => item.id === targetId);

          if (draggedItem && currentIndex !== -1 && targetIndex !== -1) {
            items.value.splice(currentIndex, 1);
            items.value.splice(targetIndex, 0, draggedItem);
          }
        }
      }
    },
  });
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

    <!-- Animate Container -->
    <div class="p-6 mt-12 border rounded-lg bg-card">
      <div class="flex items-center justify-between mb-6">
        <div class="flex items-center gap-2">
          <Icon
            name="lucide:sparkles"
            class="w-8 h-8"
          />
          <h2 class="text-2xl font-bold">{{ t('features.animate.title') }}</h2>
        </div>
        <div class="space-x-2">
          <Button
            variant="outline"
            @click="addItem"
          >
            <Icon
              name="lucide:plus"
              class="w-4 h-4 mr-2"
            />
            Add Item
          </Button>
          <Button
            variant="outline"
            @click="shuffleList"
          >
            <Icon
              name="lucide:shuffle"
              class="w-4 h-4 mr-2"
            />
            Shuffle
          </Button>
        </div>
      </div>

      <div class="mb-6">
        <p class="text-sm text-muted-foreground">{{ t('features.animate.description') }}</p>
      </div>

      <ul
        ref="containerRef"
        v-auto-animate
        class="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
      >
        <li
          v-for="item in items"
          :key="item.id"
          :data-id="item.id"
          draggable="true"
          :class="[
            'rounded-lg border bg-card p-4 transition-colors hover:bg-accent',
            { 'opacity-50': draggingId === item.id },
          ]"
          @dragstart="onDragStart(item.id)"
          @dragend="onDragEnd"
        >
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="text-xl">{{ item.emoji }}</span>
              <span class="font-medium">{{ item.text }}</span>
            </div>
            <Button
              class="w-8 h-8"
              variant="ghost"
              size="icon"
              @click="() => removeItem(item)"
            >
              <Icon
                name="lucide:grip"
                class="w-4 h-4 cursor-pointer text-muted-foreground"
              />
              <Icon
                name="lucide:x"
                class="w-4 h-4"
              />
            </Button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<i18n lang="json">
{
  "en": {
    "welcome": "Welcome to the Nuxt 3 starter template",
    "english": "English",
    "norwegian": "Norwegian",
    "description": "A simple Nuxt 3 template for a quicker project start.",
    "selectLanguage": "Select Language",
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
      },
      "animate": {
        "title": "Auto Animate",
        "description": "Smooth animations for adding, removing, and reordering elements",
        "shuffle": "Shuffle List"
      }
    }
  },
  "no": {
    "welcome": "Velkommen til Nuxt 3 startmalen",
    "english": "Engelsk",
    "norwegian": "Norsk",
    "description": "En enkel Nuxt 3 mal for en raskere start.",
    "selectLanguage": "Velg språk",
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
      },
      "animate": {
        "title": "Auto Animate",
        "description": "Jevne animasjoner for å legge til, fjerne og omorganisere elementer",
        "shuffle": "Bland Liste"
      }
    }
  }
}
</i18n>
