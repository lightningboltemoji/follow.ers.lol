import type { parse } from 'vue/compiler-sfc';
<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  parse: (file: File) => Promise<void>;
}>();

const fileInput = ref();
const selectedFile = ref();

async function submit(event) {
  await props.parse(selectedFile.value.file);
}

function fileChange(event) {
  const file = fileInput.value.files[0];
  const match = file.name.match(/instagram-(.*)-(\d{4}-\d{2}-\d{2})-.*\.zip/);
  selectedFile.value = { valid: match!!, user: match?.at(1), date: match?.at(2), file };
}
</script>

<template>
  <div>
    <form
      name="upload"
      @submit.prevent="submit"
      class="flex items-center bg-transparent rounded-lg outline outline-gray-800"
    >
      <label for="fileInput" class="min-w-0 flex-grow py-1 pl-3 pr-3">
        <span class="block truncate">
          <template v-if="selectedFile && !selectedFile.valid">
            {{ selectedFile.file.name }}
          </template>
          <template v-else-if="selectedFile && selectedFile.valid"> Export from {{ selectedFile.date }} </template>
          <template v-else>Select export...</template>
        </span>
      </label>
      <input class="hidden" type="file" id="fileInput" @change="fileChange" ref="fileInput" required />
      <button type="submit" class="bg-gray-800 text-white rounded-r-lg py-3 px-3">Analyze</button>
    </form>
    <h2 class="mt-2 text-xs text-center h-6">
      <template v-if="!selectedFile">
        If you prefer, <b>turn on Airplane Mode ✈</b> to ensure<br />your data doesn't leave your phone
      </template>
      <template v-else-if="selectedFile.valid"
        >✅ <b>Name matches expected format</b><br />Looks like {{ selectedFile.user }} from
        {{ selectedFile.date }}</template
      >
      <template v-else>
        ❓️ <b>Unexpected file name</b><br />If you haven't renamed it, double check file is correct
      </template>
    </h2>
  </div>
</template>
