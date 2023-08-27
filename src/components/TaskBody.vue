<template>
  <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
  <div>
    <main-header></main-header>
    <div v-auto-animate>
    <ul v-for="(tasks, index) in taskArray" :key="index" @keydown.enter="pushTask" class="list-disc">
      <li class="p-3 font-normal text-2xl">
        {{ tasks.taskText }}<base-button><span class="material-symbols-outlined p-0" @click="deleteData(index)"> delete </span></base-button>
      </li>
    </ul>
  </div>
  </div>
</template>

<script>
import MainHeader from "./BodyHeader.vue";
import { ref } from "vue";
import { useStore } from "vuex";
import firebase from "firebase";

export default {
  components: {
    MainHeader,
  },
  setup(props, context) {
    const store = useStore();
    const taskArray = ref();
    const loggedUser = ref();

    function deleteData(data) {
      console.log(data)
      store.dispatch("deleteTask", data)
    }

    const getUid = firebase.auth().onAuthStateChanged(function() {
      loggedUser.value = firebase.auth().currentUser.uid.toString(); 
      pushTask();
    })

    function pushTask() {  
      var taskCountRef = firebase.database().ref("tasks");
      taskCountRef.orderByChild('userUID').equalTo(`${loggedUser.value}`).on("value", (snapshot) => {
        taskArray.value = snapshot.val();
      });
      console.log(loggedUser.value)
      store.dispatch("refreshTasks");
    }

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
