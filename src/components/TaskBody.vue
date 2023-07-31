<template>
  <div>
  <main-header></main-header>
  <li 
    v-for="tasks in taskArray"
    :key="tasks.id"
    :taskText="tasks.taskText"
    @keydown.enter="pushTask">
    <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
    />
  <span>-</span>
  <span
      >{{ taskArray.taskText }}<a><span class="material-symbols-outlined"> delete </span></a>
      <hr
    /></span>
  </li> 
  </div>
</template>

<script>
import MainHeader from "./BodyHeader.vue";

export default {
  components: {
    MainHeader
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
.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
}
</style>
