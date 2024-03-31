<template>
  <page-header />
  <page-bounds>
    <index-jumbo />
    <div class="flex flex-col items-center mt-6 mb-8">
      <NuxtLink to="/guided/1">
        <button class="bg-gray-800 text-white rounded-xl px-6 py-3 text-2xl">Guide me through it</button>
      </NuxtLink>
      <NuxtLink to="/analyze">
        <button class="font-bold rounded-xl mt-3 px-6 py-3 outline">
          I've done this before, skip the instructions
        </button>
      </NuxtLink>
    </div>
    <index-faq class="mt-10" />
  </page-bounds>
</template>
