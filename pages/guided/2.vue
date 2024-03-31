<template>
  <page-header />
  <page-bounds>
    <div class="mt-6 [&>p:not(:first-child)]:mt-2">
      <p>Page 2</p>
      <p class="flex justify-end mt-4">
        <NuxtLink to="/guided/3">
          <button class="bg-gray-800 text-white rounded-xl px-6 py-2 text-lg">Next</button>
        </NuxtLink>
      </p>
    </div>
  </page-bounds>
</template>
