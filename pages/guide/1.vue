<template>
  <guide-step :index="1">
    <p>Hi!👋</p>
    <p>First, we need to export a list of followers and following from Instagram.</p>
    <p>
      This is easy to do, but it's <b>critical</b> you get all options <b>exactly</b> right. I recommend reading the
      instructions for a step, completing it, then jumping back to the guide for the next.
    </p>
    <p>Also, <b>have your password handy</b>. Don't worry: Instagram will ask for it, not this site.</p>
  </guide-step>
  <guide-step class="mt-16 opacity-40" :index="-1">
    <div class="pt-8 h-0 border-t-2 border-black"></div>
    <p>Alternatively, if you want to try the short, text-based version (the <b>hard way</b>):</p>
    <div class="mt-2">
      <ul class="pl-4 list-disc">
        <li><b>Settings and privacy</b></li>
        <li><b>Account Center</b></li>
        <li><b>Your information and permissions</b></li>
        <li><b>Download your information</b></li>
        <li><b>Download or transfer information</b></li>
        <li><b>Some of your information</b></li>
        <li><b>Followers and following</b></li>
        <li><b>Download to device</b></li>
        <li>Set <b>Date range</b> to <b>All time</b></li>
        <li>Set <b>Format</b> to <b>JSON</b></li>
        <li><b>Create files</b></li>
        <li>
          <i>Wait several minutes for the request to process - you'll get an email notification when it's ready</i>
        </li>
        <li>Navigate back to <b>Download your information</b></li>
        <li>Download the export!</li>
      </ul>
    </div>
  </guide-step>
</template>
