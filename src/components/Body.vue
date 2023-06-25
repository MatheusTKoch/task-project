<template>
  <div class="taskBorder">
    <span
      >{{ taskText }}
      <hr
    /></span>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    taskText: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    isClicked: {
      type: Boolean,
      required: true
    }
  },
};
</script>

