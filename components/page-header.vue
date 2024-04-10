<script setup lang="ts">
const emojis = ["😇", "🤩", "🥸", "🫠", "🤠"];
const emoji = emojis[Math.floor(Math.random() * emojis.length)];

var onMobile = true;
var canShare = false;
if (process.client) {
  onMobile =
    navigator?.userAgent.match(/Mobi/i) ||
    navigator?.userAgent.match(/Android/i) ||
    navigator?.userAgent.match(/iPhone/i);
  canShare = navigator?.share;
}

function share() {
  if (process.client) {
    navigator.share({
      title: "follow.ers.lol",
      url: "https://follow.ers.lol",
    });
  }
}
</script>

<template>
  <div class="flex mx-4 py-2 text-xl sticky top-0 bg-[var(--primary-bg-color)] select-none">
    <page-bounds>
      <div class="flex flex-grow">
        <button class="mr-auto" @click="$router.back()">⬅️</button>
        <NuxtLink to="/">
          <span>follow.ers.lol {{ emoji }}</span>
        </NuxtLink>
        <span class="ml-auto">
          <button v-if="canShare" @click="share()">🤝</button>
        </span>
      </div>
    </page-bounds>
  </div>
  <page-bounds>
    <div
      class="rounded-xl text-xl text-white text-center py-4 bg-[var(--alert-bg-color)] font-bold my-2"
      v-if="!onMobile"
    >
      🚨 This site is designed to be used on your phone. Switch over if possible! 🚨
    </div>
  </page-bounds>
</template>
