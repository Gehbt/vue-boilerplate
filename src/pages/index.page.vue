<script setup lang="ts">
import { onMounted, ref } from "vue";
import TheWelcome from "../components/welcome/TheWelcome.vue";
const model = ref<string>("");
</script>

<template>
  <main>
    <TheWelcome v-model="model" />
  </main>
</template>

<route lang="yaml">
# name 处最后不要重载
name: index
# meta 对 hmr 无效，需要重新启动才会修改
meta:
  requiresAuth: false
</route>
