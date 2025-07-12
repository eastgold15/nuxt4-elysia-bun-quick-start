<template>
  <div v-if="$loading" class="bg-black/30 flex items-center inset-0 justify-center fixed z-50 backdrop-blur-sm">
    <div class="text-white flex flex-col items-center">
      <!-- Loading Spinner -->
      <div class="i-carbon-sun text-4xl animate-spin" />
      <p class="text-lg mt-2">
        加载中...
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { $loading } = useNuxtApp();
</script>
