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
  const match = file.name.match(/instagram-.*(\d{4}-\d{2}-\d{2}).*\.zip/);
  selectedFile.value = { valid: match!!, date: match?.at(1), file };
}
</script>

<template>
  <div>
    <form name="upload" @submit.prevent="submit" class="flex items-center bg-[#98B9AB] rounded-lg">
      <label for="fileInput" class="min-w-0 flex-grow py-1 pl-3 pr-1">
        <div v-if="selectedFile && !selectedFile.valid">
          <span class="block truncate">{{ selectedFile.file.name }} ❓</span>
          <span class="text-xs block truncate">
            Unexpected file name: if you haven't renamed it, double check file is correct
          </span>
        </div>
        <div v-else-if="selectedFile && selectedFile.valid">
          <span class="block truncate">Export from {{ selectedFile.date }} ✅</span>
        </div>
        <div v-else>Select export...</div>
      </label>
      <input class="hidden" type="file" id="fileInput" @change="fileChange" ref="fileInput" required />
      <button type="submit" class="bg-slate-800 text-white rounded-r-lg py-3 px-3">Analyze</button>
    </form>
  </div>
</template>
