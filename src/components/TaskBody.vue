<template>
  <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
  <div>
    <main-header></main-header>
    <ul v-for="tasks in taskArray" :key="tasks.id" @keydown.enter="pushTask" class="list-disc">
      <li class="p-3 font-normal text-2xl">
        {{ tasks.taskText }}<base-button><span class="material-symbols-outlined p-0" @click="deleteData"> delete </span></base-button>
      </li>
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
  setup(props, context) {
    const store = useStore();
    const taskArray = ref();

    function pushTask() {
      var taskCountRef = firebase.database().ref("tasks");
      taskCountRef.on("value", (snapshot) => {
        taskArray.value = snapshot.val();
      });
      store.dispatch("refreshTasks");
      
    }

    function deleteData() {
      console.log(taskArray.key)
      store.dispatch("deleteTask", taskArray.key)
    }

    onBeforeMount(function () {
      pushTask();
    });

    return {
      taskArray,
      pushTask,
      deleteData
    };
  },
};
</script>

<style scoped>
.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
}
</style>
