<script setup lang="ts">
import { BlobReader, TextWriter, ZipReader } from "@zip.js/zip.js";
import { toRaw } from "vue";

const followers = ref(new Set());
const following = ref(new Set());
const notFollowingYouBack = computed(() => toRaw(following.value).difference(toRaw(followers.value)));
const notFollowingThemBack = computed(() => toRaw(followers.value).difference(toRaw(following.value)));

async function parseJson(entry) {
  const buff = new TextWriter();
  await entry.getData(buff);
  return JSON.parse(await buff.getData());
}

async function entryReader(entries, flattener) {
  return (await Promise.all(entries.map(parseJson))).flatMap(flattener).map((e) => e["string_list_data"][0]["value"]);
}

async function parse(file: File) {
  const zipReader = new ZipReader(new BlobReader(file));
  try {
    const entries = await zipReader.getEntries();

    const followerZipEntries = entries.filter((f) => f.filename.match(/followers_\d+.json/));
    const followingZipEntries = entries.filter((f) => f.filename.match(/following.json/));

    followers.value = new Set(await entryReader(followerZipEntries, (e) => e));
    following.value = new Set(await entryReader(followingZipEntries, (e) => e["relationships_following"]));
  } finally {
    await zipReader.close();
  }
}
</script>

<template>
  <page-header />
  <page-bounds>
    <div>
      <h2 class="text-xs">If you prefer, <b>turn on Airplane Mode ✈</b> to ensure your data is not transmitted</h2>
      <analyze-file-select :parse />
      <analyze-selectable-view :followers :following :notFollowingYouBack :notFollowingThemBack />
    </div>
  </page-bounds>
</template>
