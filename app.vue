<script setup lang="ts">
const emojis = ["😇", "🤩", "🥸", "🫠", "🤠"];
const emoji = emojis[Math.floor(Math.random() * emojis.length)];
</script>
<template>
  <div>
    <div>
      <h1>follow.ers.lol {{ emoji }}</h1>
      <h1>Find who doesn't follow you back on Instagram</h1>
      <h2>and who recently unfollowed</h2>
    </div>
    <div>
      <button>Get started and guide me</button>
      <button>I know what I'm doing, skip the instructions</button>
    </div>
    <div>
      <h2>How does this work?</h2>
      <div>
        <p>
          Instagram allows you to request a machine-readable export of your
          followers and following. By uploading it here, this tool will tell you
          who doesn't follow back and vice versa.
        </p>
        <p>
          Additionally, you can upload exports from
          <i>two different days</i>, and it will tell you who has unfollowed you
          between them.
        </p>
      </div>
    </div>
    <div>
      <h2>How do I know you're not saving my data?</h2>
      <ul>
        <li>
          Before uploading your data, turn on Airplane Mode ✈ to ensure your
          data couldn't possibly leave your phone.
        </li>
        <li>
          This project is open source, so you can
          <ext-link href="https://github.com/lightningboltemoji/follow.ers.lol"
            >read the code</ext-link
          >
          if that's your thing!
        </li>
        <li>
          This tool was built by
          <ext-link href="https://tanner.cecchetti.xyz">me</ext-link>. You don't
          really have any way to verify this, but I'm just a normal person that
          built this for fun. There's no ulterior motive.
        </li>
      </ul>
    </div>
  </div>
</template>
