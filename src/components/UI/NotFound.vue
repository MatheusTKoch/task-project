<template>
  <section>
    <content-box>
      <h2 class="font-semibold p-4">Page Not Found</h2>
      <div>
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

export default {
  components: {
    ContentBox,
  },
};
</script>
