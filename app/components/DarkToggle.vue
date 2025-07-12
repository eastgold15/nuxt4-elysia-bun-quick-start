<template>
  <button class="inline-flex items-center justify-center" @click="toggleDark">
    <div class="i-ri-sun-line dark:i-ri-moon-line" />
  </button>
</template>

<script setup lang="ts">
const color = useColorMode();

onMounted(() => {
  // Initialize the color mode based on user preference or system setting
  color.preference = localStorage.getItem("color-mode") || "light";
});

useHead({
  meta: [{
    id: "theme-color",
    name: "theme-color",
    content: () => color.value === "dark" ? "#222222" : "#ffffff"
  }]
});

function toggleDark() {
  color.preference = color.value === "dark" ? "light" : "dark";
}
</script>
