<template>
  <page-header />
  <page-bounds>
    <div class="mt-6 [&>p:not(:first-child)]:mt-2">
      <p>Hi!👋</p>
      <p>First, we need to export a list of followers and following from Instagram.</p>
      <p>
        This is easy to do, but it's <b>critical</b> you get all options <b>exactly</b> right. This will walk you
        through it, step-by-step. I recommend jumping back and forth between the guide and the Instagram.
      </p>
      <p>
        Also, you'll need to <b>have your password handy</b>. Don't worry, this site won't ask for it: Instagram will,
        as a final step of the data request.
      </p>
      <p class="flex justify-end mt-4">
        <NuxtLink to="/guided/2">
          <button class="bg-gray-800 text-white rounded-xl px-6 py-2 text-lg">Next</button>
        </NuxtLink>
      </p>
    </div>
  </page-bounds>
</template>
