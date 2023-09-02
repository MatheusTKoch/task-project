<template>
  <base-header>
    <div class="py-0 px-3 font-semibold dark:text-white">Task Project</div>
  </base-header>
  <section>
    <content-box class="dark:bg-sky-950">
      <h2 class="font-semibold p-4 dark:text-white">Page Not Found</h2>
      <div class="dark:text-white">
        This page could not be found - do you want to return to
        <router-link to="/login" class="underline underline-offset-2"
          >login</router-link
        >?
      </div>
    </content-box>
  </section>
</template>

<script>
import ContentBox from "./ContentBox.vue";
import BaseHeader from "./BaseHeader.vue";

export default {
  components: {
    ContentBox,
    BaseHeader
  },
};
</script>
