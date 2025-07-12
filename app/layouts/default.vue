<template>
  <div
    ref="scrollWrap"
    class="bg-grid-dashed m-auto px-4 h-full max-w-7xl box-border overflow-y-auto lg:w-6xl md:w-3xl"
  >
    <!-- vue sonner -->
    <Toaster position="top-right" rich-colors />
    <Loading />
    <div class="m-auto flex gap-5 box-border">
      <div class="h-full w-[100%] lg:w-[100%] md:w-[100%]">
        <ul class="flex flex-row">
          <NuxtLink to="/" class="pr-10px">
            首页
          </NuxtLink>

          <NuxtLink to="/about">
            关于
          </NuxtLink>
        </ul>
        <button @click="globalToast.add({ type: 'success', message: '成功消息' })">
          显示成功消息
        </button>

        <button class="ml-4 bg-red" @click="gofetch">
          {{ res }}  fetch 测试loadding
        </button>

        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { UseScrollReturn } from "@vueuse/core";
import { vScroll } from "@vueuse/components";
import { useGlobalToast } from "~/composables/useGlobalToast";

const globalToast = useGlobalToast();
const { $toast, $api } = useNuxtApp();
watch(() => globalToast.toastState.value.messages, (messages) => {
  if (messages.length > 0) {
    messages.forEach((message) => {
      switch (message.type) {
        case "success":
          $toast.success(message.message, message.options as any);
          break;
        case "error":
          $toast.error(message.message, message.options as any);
          break;
        case "info":
          $toast.info(message.message, message.options as any);
          break;
        case "warning":
          $toast.warning(message.message, message.options as any);
          break;
        case "promise":
          $toast.promise(message.options as any);
          break;
        default:
          $toast(message.message, message.options as any);
      }
    });

    globalToast.clear();
  }
}, { deep: true });

function onScroll(state: UseScrollReturn) {
  console.log("123", state); // {x, y, isScrolling, arrivedState, directions}
}

let res = ref("");
const gofetch = async () => {
  const { data } = await $api.get("/api/test");
  res.value = data;
};
</script>
