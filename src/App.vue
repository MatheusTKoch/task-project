<template>
  <main-header @submit-task="addtask"></main-header>
  <content-box>
    <task-body
      v-for="tasks in task"
      :id="tasks.id"
      :taskText="tasks.taskText"
      :crossed="tasks.crossed"
      @click="crosstask(this.task.id)"
      :class="{ isCrossed: this.task.crossed === true , notCrossed: this.task.crossed === false}"
    ></task-body>
  </content-box>
</template>

<script>
export default {
  data() {
    return {
      crossId: null,
      task: [
        {
          id: "1",
          taskText: "Build a todo task app!",
          crossed: false
        },
      ],
    };
  },
  methods: {
    addtask(taskText) {
      const task = {
        id: new Date().toISOString(),
        taskText: taskText,
        crossed: false
      };
      this.task.push(task);
    },
    crosstask(taskId) {
      if (this.task.id === taskId && this.task.crossed === true){
        this.task.crossed = false;
      } else if (this.task.id === taskId) {
        this.task.crossed = true;
      } 
      console.log(this.task.crossed)
    },
  },
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
