<script setup lang="ts">
const props = defineProps<{
  followers: Set<String>;
  following: Set<String>;
  notFollowingYouBack: Set<String>;
  notFollowingThemBack: Set<String>;
}>();

const selected = ref("notFollowingYouBack");
const selectedSet = computed(() => props[selected.value]);
</script>

<template>
  <form @submit.prevent="() => {}">
    <select name="set-to-view" v-model="selected">
      <option value="notFollowingYouBack">Doesn't follow you back ({{ notFollowingYouBack.size }})</option>
      <option value="notFollowingThemBack">You don't follow them back ({{ notFollowingThemBack.size }})</option>
      <option value="followers">Followers ({{ followers.size }})</option>
      <option value="following">Following ({{ following.size }})</option>
    </select>
  </form>
  <div v-if="props.followers.size > 0">
    <h1>User view</h1>
    <div v-for="user in selectedSet">
      <ext-link :href="`https://instagram.com/${user}`">{{ user }}</ext-link>
    </div>
  </div>
</template>
