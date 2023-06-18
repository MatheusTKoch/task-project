<template>
  <section>
    <p>My Tasks</p>
    <div>Add a task below (with Enter) and click over the finished tasks</div>
    <br />
    <input type="text" v-model="taskText" @keydown.enter="submitData" />
  </section>
</template>

<script>
export default {
  data() {
    return {
      taskText: "",
    };
  },
  computed: {
    submitData() {
      this.$emit("submit-task", this.taskText);
    },
  },
};
</script>

<style>
p {
  font-size: 50px;
}

div {
  font-size: 20px;
}

input {
  border: 0.25px solid;
  border-radius: 7px;
}
</style>
