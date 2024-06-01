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
  <div class="flex mx-4 py-2 text-xl sticky top-0 bg-primary select-none">
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
    <div class="flex rounded-xl py-4 bg-alert my-2" v-if="!onMobile">
      <div class="m-auto text-3xl">🚨</div>
      <div class="font-bold text-xl text-white text-center">
        This site works best on your phone<br />Switch over if possible
      </div>
      <div class="m-auto text-3xl">🚨</div>
    </div>
  </page-bounds>
</template>
