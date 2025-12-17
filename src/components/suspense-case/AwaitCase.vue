<script lang="ts" setup>
await sleep(2000);
const msg = "Await Fin.";
function sleep(ms: number) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}
</script>

<template>
  <div>{{ msg }}</div>
</template>
