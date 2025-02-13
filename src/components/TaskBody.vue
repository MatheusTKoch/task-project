<template>
  <div class="dark:bg-gray-900 min-h-screen p-4">
    <main-header></main-header>
    <div v-if="isLoading" class="flex justify-center items-center h-32">
      <div class="spinner"></div>
    </div>
    <div v-else class="flex justify-center">
      <ul class="task-list">
        <li
          v-for="(task, key) in taskArray"
          :key="key"
          class="task-item"
        >
          <span>{{ task.taskText }}</span>
          <button @click="deleteTask(key)" class="delete-btn">
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
import { getAuth } from "firebase/auth";
import { Icon } from "@iconify/vue";
import { getDatabase, ref as refFirebase } from "@firebase/database";

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
    const db = getDatabase();
    let tasksRefListener = null;

    const unsubscribeAuth = getAuth().onAuthStateChanged((user) => {
      if (user) {
        loggedUser.value = user.uid;
        fetchUserTasks();
      } else {
        loggedUser.value = null;
        taskArray.value = {};
        if (tasksRefListener) {
          refFirebase(db, "tasks").off("value", tasksRefListener);
          tasksRefListener = null;
        }
      }
    });

    function fetchUserTasks() {
      isLoading.value = true;
      if (tasksRefListener) {
        refFirebase("tasks").off("value", tasksRefListener);
      }
      tasksRefListener = 
      refFirebase(db, "tasks")
        .orderByChild("userUID")
        .equalTo(loggedUser.value)
        .on("value", (snapshot) => {
          taskArray.value = snapshot.val() || {};
          isLoading.value = false;
        });
    }

    function addTask() {
      if (!loggedUser.value || !newTaskText.value.trim()) return;
      refFirebase(db, "tasks")
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
      refFirebase(db, "tasks").child(taskKey).once("value", (snapshot) => {
        const taskData = snapshot.val();
        if (taskData && taskData.userUID === loggedUser.value) {
          refFirebase(db, "tasks").child(taskKey)
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
        refFirebase("tasks").off("value", tasksRefListener);
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
.task-list {
  list-style-type: disc;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding-left: 1rem;
}

.task-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  font-size: 1.5rem;
}
 
.delete-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: #ef4444;
}

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