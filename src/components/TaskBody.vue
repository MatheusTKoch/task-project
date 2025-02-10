<template>
  <div class="dark:bg-gray-900 min-h-screen p-4">
    <main-header></main-header>
    <div class="my-4">
      <input
        v-model="newTaskText"
        placeholder="Add a new task..."
        class="border p-2 rounded w-full max-w-md"
      />
      <button
        @click="addTask"
        class="bg-blue-500 text-white px-4 py-2 rounded ml-2"
      >
        Add
      </button>
    </div>
    <div v-if="isLoading" class="flex justify-center items-center h-32">
      <div class="spinner"></div>
    </div>
    <div v-else>
      <ul class="list-disc dark:text-white">
        <li
          v-for="(task, key) in taskArray"
          :key="key"
          class="p-3 font-normal text-2xl flex items-center justify-between"
        >
          <span>{{ task.taskText }}</span>
          <button @click="deleteTask(key)" class="text-red-500">
            <Icon icon="mdi-light:delete" />
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import MainHeader from "./BodyHeader.vue";
import { ref, onUnmounted } from "vue";
import firebase from "firebase";
import { Icon } from "@iconify/vue";

export default {
  name: "TaskList",
  components: {
    MainHeader,
    Icon,
  },
  setup() {
    const taskArray = ref({});
    const isLoading = ref(false);
    const newTaskText = ref("");
    const loggedUser = ref(null);
    let tasksRefListener = null;
    const unsubscribeAuth = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        loggedUser.value = user.uid;
        fetchUserTasks();
      } else {
        loggedUser.value = null;
        taskArray.value = {};
        if (tasksRefListener) {
          firebase.database().ref("tasks").off("value", tasksRefListener);
          tasksRefListener = null;
        }
      }
    });

    function fetchUserTasks() {
      isLoading.value = true;
      const tasksRef = firebase.database().ref("tasks");
      if (tasksRefListener) {
        tasksRef.off("value", tasksRefListener);
      }
      tasksRefListener = tasksRef
        .orderByChild("userUID")
        .equalTo(loggedUser.value)
        .on("value", (snapshot) => {
          taskArray.value = snapshot.val() || {};
          isLoading.value = false;
        });
    }

    function addTask() {
      if (!loggedUser.value || !newTaskText.value.trim()) return;
      const tasksRef = firebase.database().ref("tasks");
      tasksRef
        .push({
          taskText: newTaskText.value,
          userUID: loggedUser.value,
        })
        .then(() => {
          newTaskText.value = "";
        })
        .catch((error) => {
          console.error("Error adding task:", error);
        });
    }

    function deleteTask(taskKey) {
      const taskRef = firebase.database().ref("tasks").child(taskKey);
      taskRef.once("value", (snapshot) => {
        const taskData = snapshot.val();
        if (taskData && taskData.userUID === loggedUser.value) {
          taskRef
            .remove()
            .then(() => console.log("Task removed!"))
            .catch((error) =>
              console.error("Error removing task:", error)
            );
        } else {
          console.error("Access denied: task doesn't belong to user.");
        }
      });
    }

    onUnmounted(() => {
      if (tasksRefListener) {
        firebase.database().ref("tasks").off("value", tasksRefListener);
      }
      unsubscribeAuth();
    });

    return {
      taskArray,
      isLoading,
      newTaskText,
      addTask,
      deleteTask,
    };
  },
};
</script>

<style scoped>
.spinner {
  width: 32px;
  height: 32px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #000;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>