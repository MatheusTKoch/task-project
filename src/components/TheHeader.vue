<template>
  <section>
    <p>My Tasks</p>
    <div>Add a task below (with Enter) and click over the finished tasks</div>
    <br />
    <input
    id="insertField" 
    type="text"
    v-model="taskText" 
    @keydown.enter="submitData" />
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
      document.getElementById("insertField").value = '';
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
  width: 400px;
}

span {
  text-align: center;
  padding: 2px;
}

hr {
  width: fit-content;
}
</style>
