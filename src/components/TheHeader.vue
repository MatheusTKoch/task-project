<template>
  <section>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
    />
    <p>My Tasks</p>
    <div>Add a task below (with Enter) and click over the finished tasks</div>
    <br />
    <input
      id="insertField"
      type="text"
      v-model="taskText"
      @keydown.enter="submitTask(taskText)"
    /><span class="material-symbols-sharp">
      refresh
    </span>
  </section>
</template>

<script>
export default {
  data() {
    return {
      taskText: ''
      // taskText() {
      //   return this.$store.getters.taskText;
      // }
      }
      },
  methods: {
    submitTask(newTask) {
      this.$store.commit('submitData', newTask);
    }
  }
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
  width: 400px;
}

span {
  text-align: center;
  padding: 2px;
}

hr {
  width: fit-content;
}

.material-symbols-sharp {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
}
</style>
