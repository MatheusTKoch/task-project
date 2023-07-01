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
      @keydown.enter="submitData"
    /><span class="material-symbols-sharp" @click="refreshTasks">
      refresh
    </span>
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
      fetch(
        "https://task-project-d7290-default-rtdb.firebaseio.com/tasks.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: this.id,
            taskText: this.taskText,
          }),
        }
      );
      document.getElementById("insertField").value = "";
    },
    refreshTasks() {
      this.isLoading = true;
      this.error = null;
      fetch("https://task-project-d7290-default-rtdb.firebaseio.com/tasks.json")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          this.isLoading = false;
          const task = [];
          for (const id in data) {
            task.push({
              id: id,
              taskText: data[id].taskText,
            });
          }
          this.task = task;
          console.log(this.task)
        })
        .catch((error) => {
          console.log(error);
          this.isLoading = false;
          this.error = 'Failed to load data - please try again later!';
        });
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

.material-symbols-sharp {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
}
</style>
