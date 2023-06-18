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
  },
};
</script>

<style>
/* .taskBorder {
    padding: 8px;
    width: fit-content;
    border: 0.5px solid black;
    border-radius: 4px;
 } */

span {
  text-align: center;
  padding: 2px;
}

hr {
  width: fit-content;
}
</style>
