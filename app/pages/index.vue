<template>
  <div class="text-white bg-primary">
    首页
    <test></test>

    <ClientOnly>
      <!-- 服务端拿到的是system ，前端直接拿到system对应的dark避免水合，只在客户端渲染 -->
      <h1>Color mode: {{ $colorMode.value }}</h1>
    </ClientOnly>
    <select v-model="$colorMode.preference">
      <option value="system">
        System
      </option>
      <option value="light">
        Light
      </option>
      <option value="dark">
        Dark
      </option>
      <option value="sepia">
        Sepia
      </option>
    </select>

    <div class="text-primary">
      text-primary
    </div>

    <div class="text-secondary bg-secondary h-100px w-100px">
      text-secondary
    </div>

    <div class="text-very-cool text-primary bg-primary">
      111
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>
