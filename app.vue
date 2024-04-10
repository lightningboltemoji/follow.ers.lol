<template>
  <page-header />
  <page-bounds>
    <NuxtPage />
  </page-bounds>
  <page-footer />
</template>

<style>
* {
  --primary-bg-color: #ffd447;
  --alert-bg-color: #9c4221;
}

body {
  background-color: var(--primary-bg-color);
}
</style>
