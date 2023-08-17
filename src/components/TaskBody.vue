<template>
  <div>
    <main-header></main-header>
    <ul
      v-for="tasks in taskArray"
      :key="tasks.id"
      @keydown.enter="pushTask"
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <span>-</span>
      <!-- <transition-group tag="span" name="tasks"> -->
      <li>
        {{ tasks.taskText }}<a><span class="material-symbols-outlined"> delete </span></a>
        <hr />
      </li>
      <!-- </transition-group> -->
    </ul>
  </div>
</template>

<script>
import MainHeader from "./BodyHeader.vue";
import { ref, onBeforeMount } from "vue";
import { useStore } from "vuex";
import firebase from "firebase";

export default {
  components: {
    MainHeader,
  },
  setup() {
    const store = useStore();
    const taskArray = ref();

    function pushTask() {
      var taskCountRef = firebase
        .database()
        .ref("tasks");
      taskCountRef.on("value", (snapshot) => {
        taskArray.value = snapshot.val();
      });
      store.dispatch("refreshTasks");
    }

    onBeforeMount(function () {
      pushTask();
    });

    return {
      taskArray,
      pushTask,
    };
  },
};
</script>

<style scoped>
.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
}

.tasks-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.tasks-enter-active {
  transition: all 1s ease-out;
}

.tasks-enter-to,
.tasks-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.tasks-leave-active {
  transition: all 1s ease-in;
  position: absolute;
}

.tasks-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.tasks-move {
  transition: transform 0.8s ease;
}
</style>
