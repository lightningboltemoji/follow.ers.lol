<script setup lang="ts">
const { src, width, height } = defineProps<{
  src: string;
  width: number;
  height: number;
}>();
</script>
<template>
  <nuxt-img :src :width :height :placeholder="[300]" class="m-auto max-w-[80%]" />
</template>
