<template>
  <div class="taskBorder">
  <span>{{ taskText }}</span>
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
  },
};
</script>

<style>
 .taskBorder {
    padding: 8px;
    width: fit-content;
    border: 0.5px solid black;
    border-radius: 4px;
 }

 span {
    text-align: center;
 }
</style>
