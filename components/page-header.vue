<script setup lang="ts">
const emojis = ["😇", "🤩", "🥸", "🫠", "🤠"];
const emoji = emojis[Math.floor(Math.random() * emojis.length)];
</script>

<script lang="ts">
function share() {
  navigator.share({
    title: "follow.ers.lol",
    url: "https://follow.ers.lol",
  });
}
</script>

<template>
  <div class="text-xl text-center">
    <!-- TODO: share doesn't work-->
    follow.ers.lol {{ emoji }} <button v-if="navigator?.share" @click="share()">share</button>
  </div>
</template>
