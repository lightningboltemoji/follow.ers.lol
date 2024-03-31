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
  <div>
    <form @submit.prevent="() => {}" class="flex">
      <select name="set-to-view" v-model="selected" class="flex-grow p-3 rounded-lg appearance-none">
        <option value="notFollowingYouBack">Doesn't follow you back ({{ notFollowingYouBack.size }})</option>
        <option value="notFollowingThemBack">You don't follow them back ({{ notFollowingThemBack.size }})</option>
        <option value="followers">Followers ({{ followers.size }})</option>
        <option value="following">Following ({{ following.size }})</option>
      </select>
    </form>
    <div v-if="props.followers.size > 0 || props.following.size > 0">
      <ol class="mx-4 mt-3 [&>li:not(:first-child)]:mt-2">
        <li v-for="user in selectedSet">
          <ext-link class="text-xl" :href="`https://instagram.com/${user}`">{{ user }}</ext-link>
        </li>
      </ol>
    </div>
  </div>
</template>
