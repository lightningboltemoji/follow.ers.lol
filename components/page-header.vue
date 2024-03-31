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
  <div class="flex mx-4 py-1 pt-2 text-xl sticky top-0 bg-[#ffd447]">
    <button class="mr-auto" @click="$router.back()">⬅️</button>
    <NuxtLink to="/">
      <span>follow.ers.lol {{ emoji }}</span>
    </NuxtLink>
    <span class="ml-auto">
      <button v-if="canShare" @click="share()">🤝</button>
    </span>
  </div>
  <div class="rounded-xl text-xl text-white text-center p-4 bg-orange-800 font-bold mx-4 my-2" v-if="!onMobile">
    🚨 This site is designed to be used on your phone. Switch over if possible! 🚨
  </div>
</template>
