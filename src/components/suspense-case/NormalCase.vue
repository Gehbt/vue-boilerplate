<script lang="ts" setup>
await sleep(2000);
const msg = "Awaited";
function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
</script>

<template>
  <div>{{ msg }}</div>
</template>
