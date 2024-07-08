<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
  <div>
    <h1>
      404 Not Found path: <strong>{{ route.path }}</strong>
    </h1>
    <p>Sorry, the page you are looking for does not exist.</p>
  </div>
</template>
