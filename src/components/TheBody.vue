<template>
  <div>
    <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
  /> 
  <span>-</span> 
  <span
      >{{ taskText }}<span class="material-symbols-outlined"> delete </span>
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
    crossed: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style>
.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
}
</style>
