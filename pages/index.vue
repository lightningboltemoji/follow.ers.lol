<template>
  <index-jumbo />
  <div class="flex flex-col items-center mt-6 mb-8">
    <NuxtLink to="/guide/1">
      <button class="bg-secondary text-white rounded-xl px-6 py-3 text-2xl">Guide me through it</button>
    </NuxtLink>
    <NuxtLink to="/analyze">
      <button class="text-secondary font-bold rounded-xl mt-3 px-6 py-3 outline">Skip it, I've done this before</button>
    </NuxtLink>
  </div>
  <index-faq class="mt-10" />
</template>
