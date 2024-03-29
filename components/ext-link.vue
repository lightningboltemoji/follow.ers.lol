<script setup lang="ts">
const props = defineProps<{
  href: string;
}>();
</script>

<template>
  <a :href target="_blank">↗ <slot /></a>
</template>

<style scoped>
a {
  text-decoration: none;
  font-weight: bold;
}
a:hover {
  text-decoration: underline dotted;
}
</style>
