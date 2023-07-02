<template>
  <main-header></main-header>
  <content-box>
    <task-body
      v-for="tasks in task"
      :key="tasks.id"
      :id="tasks.id"
      :taskText="tasks.taskText"
      @keydown.enter="loadTask()"
    ></task-body>
  </content-box>
</template>

<script>
import ContentBox from "./components/UI/ContentBox.vue";

export default {
  components: {
    ContentBox
  },
  data() {
    return {
      task: [],
    };
  },
  methods: {
    loadTask() {
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
    mounted() {
      this.loadTask();
    }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200&family=Oswald:wght@300&display=swap");

* {
  font-family: "Montserrat", sans-serif;
  text-align: center;
}

#style {
  border-width: 0.5px solid;
}

.isCrossed {
  text-decoration: line-through;
}

.notCrossed {
  text-decoration: none;
}
</style>
