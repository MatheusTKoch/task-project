<template>
  <main-header></main-header>
  <!-- @someEvent="pushTask" -->
  <content-box>
    <task-body
      v-for="tasks in taskArray"
      :id="tasks.id"
      :taskText="tasks.taskText"
      @keydown.enter="pushTask"
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
      taskArray: this.$store.state.taskArray
    }
  },
  methods: {
    pushTask() {
      this.$store.dispatch('refreshTasks');
    }
  },
  mounted() {
       this.$store.dispatch('refreshTasks'); 
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
