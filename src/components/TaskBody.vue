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
  <transition-group tag="span" name="tasks-list">
  <span
      >{{ taskArray.taskText }}<a><span class="material-symbols-outlined"> delete </span></a>
      <hr
    /></span>
  </transition-group>
  </li> 
  </div>
</template>

<script>
import MainHeader from "./BodyHeader.vue";
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';

export default {
  components: {
    MainHeader
  },
  setup() {
    const store = useStore();
    const taskArray = ref(store.state.taskArray);

    function pushTask() {
      store.dispatch('refreshTasks');
    }

    onMounted(function() {
      pushTask();
    })

    return {
      taskArray,
      pushTask
    }
  }
};
</script>

<style scoped>
.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
}

.tasks-list-enter-from {
    opacity: 0;
    transform: translateX(-30px);
}

.tasks-list-enter-active {
    transition: all 1s ease-out;
}

.tasks-list-enter-to,
.tasks-list-leave-from {
    opacity: 1;
    transform: translateX(0);
}

.tasks-list-leave-active {
    transition: all 1s ease-in;
    position: absolute;
}

.tasks-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

.tasks-list-move {
    transition: transform 0.8s ease;
}
</style>
