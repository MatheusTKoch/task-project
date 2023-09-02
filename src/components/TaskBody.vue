<template>
  <div class="dark:bg-gray-900">
    <main-header></main-header>
    <div v-if="isLoading">
    <div class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
      role="status">
    <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
    >Loading...</span>
    </div>
    </div>
    <div v-else>
    <div v-auto-animate>
    <ul v-for="(tasks, index) in taskArray" :key="index" @keydown.enter="pushTask" class="list-disc dark:text-white">
      <li class="p-3 font-normal text-2xl">
        {{ tasks.taskText }}<base-button><Icon icon="mdi-light:delete" @click="deleteData(index)"/></base-button>
      </li>
    </ul>
  </div>
  </div>
  </div>
</template>

<script>
import MainHeader from "./BodyHeader.vue";
import { ref } from "vue";
import { useStore } from "vuex";
import firebase from "firebase";
import { Icon } from "@iconify/vue";

export default {
  components: {
    MainHeader,
    Icon
  },
  setup(props, context) {
    const store = useStore();
    const taskArray = ref();
    const loggedUser = ref();
    const isLoading = ref(false);

    function deleteData(data) {
      console.log(data)
      store.dispatch("deleteTask", data)
    }

    const getUid = firebase.auth().onAuthStateChanged(function() {
      loggedUser.value = firebase.auth().currentUser.uid.toString(); 
      pushTask();
    })

    function pushTask() {  
      isLoading.value = true;
      console.log(isLoading)
      var taskCountRef = firebase.database().ref("tasks");
      taskCountRef.orderByChild('userUID').equalTo(`${loggedUser.value}`).on("value", (snapshot) => {
        taskArray.value = snapshot.val();
      });
      isLoading.value = false;
      console.log(isLoading)
      store.dispatch("refreshTasks");
    }

    return {
      taskArray,
      pushTask,
      deleteData,
      isLoading
    };
  },
};
</script>
