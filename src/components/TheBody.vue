<template>
  <div>
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
    crossed: {
      type: Boolean,
      required: true
    }
  },
};
</script>

