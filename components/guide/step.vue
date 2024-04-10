<script setup lang="ts">
const props = defineProps<{
  index: number;
}>();
</script>
<template>
  <div class="mt-8 [&>h1]:text-3xl [&>h1:not(:first-child)]:mt-3 [&>p:not(:first-child)]:mt-6 [&>img]:mt-6">
    <slot />
    <div class="flex justify-end mt-8">
      <NuxtLink :to="props.index < 0 ? `/analyze` : `/guide/${props.index + 1}`">
        <button class="bg-gray-800 text-white rounded-xl px-6 py-2 text-lg">
          {{ props.index < 0 ? "Finish" : "Next" }}
        </button>
      </NuxtLink>
    </div>
  </div>
</template>
