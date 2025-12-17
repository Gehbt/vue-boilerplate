<script setup lang="ts">
import AwaitCase from "@/components/suspense-case/AwaitCase.vue";
import { useRoute } from "vue-router";
// power by volar-plugin sfc-typed-router
const route = useRoute();
</script>

<template>
  <div class="about">
    <h1>
      This is an about page
      {{ route.name }}
    </h1>
  </div>
  <div style="border: 1px solid #fff">
    <Suspense :suspensible="true">
      <template #default>
        <AwaitCase />
      </template>
      <template #fallback>
        <h1>Loading...</h1>
      </template>
    </Suspense>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<route lang="yaml">
name: about
meta:
  requiresAuth: true
</route>
