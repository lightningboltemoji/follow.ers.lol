<script setup lang="ts">
const props = defineProps<{
  href: string;
}>();
</script>

<template>
  <a class="font-bold hover:underline hover:decoration-dotted" :href target="_blank">↗ <slot /></a>
</template>
