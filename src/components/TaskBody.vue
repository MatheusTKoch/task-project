<template>
  <div class="dark:bg-gray-900 min-h-screen p-4">
    <main-header>
      <div class="flex justify-between items-center w-full px-4">
        <div class="py-0 px-3 font-semibold dark:text-white">Task Project</div>
        <div class="flex items-center gap-2">
          <Icon icon="iconamoon:mode-light" :color="isDark ? 'white' : 'black'" width="26" height="26" />
          <Switch
            @click="toggleDark()"
            v-model="isDark"
            :class="isDark ? 'bg-gray-900' : 'bg-gray-700'"
            class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors"
          >
            <span
              :class="isDark ? 'translate-x-6' : 'translate-x-1'"
              class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform"
            />
          </Switch>
          <Icon 
            icon="material-symbols:dark-mode-outline" 
            :color="isDark ? 'white' : 'black'" 
            width="26" 
            height="26" 
          />
          <button 
            @click="logout" 
            class="ml-4 px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </main-header>
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
import { getAuth, signOut } from "firebase/auth";
import { Icon } from "@iconify/vue";
import { Switch } from "@headlessui/vue";
import { useToggle, useDark } from "@vueuse/core";
import { useRouter } from "vue-router";
import { onValue, getDatabase, query, ref as refFirebase, orderByChild, equalTo, child, get, remove } from "@firebase/database";

export default {
  name: "TaskList",
  components: {
    MainHeader,
    Icon,
    Switch,
  },
  setup() {
    const router = useRouter();
    const auth = getAuth();
    const isDark = useDark();
    const toggleDark = useToggle(isDark);

    const logout = async () => {
      try {
        await signOut(auth);
        router.push("/");
      } catch (error) {
        console.error("Error logging out:", error);
      }
    };

    const taskArray = ref({});
    const isLoading = ref(false);
    const newTaskText = ref("");
    const loggedUser = ref(null);
    const db = getDatabase();
    let tasksRefListener = null;

    const unsubscribeAuth = auth.onAuthStateChanged((user) => {
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
        tasksRefListener();
      }
      const tasksQuery = query(
        refFirebase(db, "tasks"),
        orderByChild("userUID"),
        equalTo(loggedUser.value)
      );
      tasksRefListener = onValue(tasksQuery, (snapshot) => {
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
      const tasksRef = refFirebase(db, "tasks");
      const taskRef = child(tasksRef, taskKey);
      get(taskRef)
        .then((snapshot) => {
          const taskData = snapshot.val();
          if (taskData && taskData.userUID === loggedUser.value) {
            remove(taskRef)
              .then(() => console.log("Task removed!"))
              .catch((error) =>
                console.error("Error removing task:", error)
              );
          } else {
            console.error("Access denied: task doesn't belong to user.");
          }
        })
        .catch((error) => {
          console.error("Error fetching task data:", error);
        });
    }

    onUnmounted(() => {
      if (tasksRefListener) {
        tasksRefListener();
      }
      unsubscribeAuth();
    });

    return {
      taskArray,
      isLoading,
      newTaskText,
      addTask,
      deleteTask,
      isDark,
      toggleDark,
      logout,
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