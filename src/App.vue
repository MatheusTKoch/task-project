<template>
  <main-header @submit-task="addtask"></main-header>
  <br />
  <hr />
  <div class="tasksBody">
    <task-body
      v-for="tasks in task"
      :id="tasks.id"
      :taskText="tasks.taskText"
    ></task-body>
  </div>
</template>

<script>
export default {
  data() {
    return {
      task: [ {
        id: '1',
        taskText: 'Build a todo task app!'
      }
      ]
    }
  },
  methods: {
    addtask(taskText) {
      const task = {
        id: new Date().toISOString(),
        taskText: taskText
      }
      this.task.push(task);
    }
  }
  }

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

.tasksBody {
  box-shadow: black 2px;
}
</style>
