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
</script>

<script lang="ts">
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
  <div class="text-xl text-center">
    follow.ers.lol {{ emoji }} <button v-if="canShare" @click="share()">share</button>
  </div>
  <div class="rounded-xl text-white text-center p-4 bg-orange-800" v-if="!onMobile">
    This site is designed to be used on your phone. Switch over if possible!
  </div>
</template>
