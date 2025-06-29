<template>
  <div class="dark:bg-gray-900 min-h-screen m-0 p-0">
    <main-header>
      <div class="flex justify-between items-center w-full">
        <div class="font-semibold dark:text-white">Task Project</div>
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
          
          <Popover class="relative ml-4">
            <PopoverButton class="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors">
              <Icon 
                icon="mdi:account-circle" 
                :color="isDark ? 'white' : 'black'" 
                width="24" 
                height="24" 
              />
              <Icon 
                icon="mdi:chevron-down" 
                :color="isDark ? 'white' : 'black'" 
                width="16" 
                height="16" 
              />
            </PopoverButton>

            <PopoverPanel class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div class="px-1 py-1">
                <div class="px-3 py-2 border-b border-gray-200 dark:border-gray-600">
                  <p class="text-sm font-medium text-gray-900 dark:text-white">
                    {{ userEmail || 'Usuário' }}
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    Logado
                  </p>
                </div>

                <button
                  @click="openProfileModal"
                  class="group flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <Icon 
                    icon="mdi:account-edit" 
                    class="mr-3 h-4 w-4" 
                    :color="isDark ? '#d1d5db' : '#374151'"
                  />
                  Editar Perfil
                </button>

                <button
                  @click="openSettingsModal"
                  class="group flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <Icon 
                    icon="mdi:cog" 
                    class="mr-3 h-4 w-4" 
                    :color="isDark ? '#d1d5db' : '#374151'"
                  />
                  Configurações
                </button>

                <div class="border-t border-gray-200 dark:border-gray-600 mt-1 pt-1">
                  <button
                    @click="logout"
                    class="group flex w-full items-center rounded-md px-3 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20"
                  >
                    <Icon 
                      icon="mdi:logout" 
                      class="mr-3 h-4 w-4" 
                      color="#dc2626"
                    />
                    Sair
                  </button>
                </div>
              </div>
            </PopoverPanel>
          </Popover>
        </div>
      </div>
    </main-header>
    
    <!-- Conteúdo principal com padding -->
    <div class="px-4 pb-4">
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

    <!-- Modais ficam fora do container principal -->
    <base-modal 
      v-model="showDeleteModal"
      title="Confirmar Exclusão"
      message="Tem certeza que deseja excluir esta tarefa? Esta ação não pode ser desfeita."
      confirm-text="Excluir"
      cancel-text="Cancelar"
      :show-cancel="true"
      @confirm="confirmDeleteTask"
      @cancel="cancelDeleteTask"
    />


    <base-modal 
      v-model="showProfileModal"
      title="Perfil do Usuário"
      confirm-text="Fechar"
      :show-cancel="false"
      @confirm="showProfileModal = false"
    >
      <template #content>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              :value="userEmail"
              disabled
              class="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
              O email não pode ser alterado
            </p>
          </div>
          <div class="text-center pt-4">
            <p class="text-sm text-gray-600 dark:text-gray-400">
              Para alterar outras informações do perfil, entre em contato com o suporte.
            </p>
          </div>
        </div>
      </template>
    </base-modal>


    <base-modal 
      v-model="showSettingsModal"
      title="Configurações"
      confirm-text="Salvar"
      cancel-text="Cancelar"
      :show-cancel="true"
      @confirm="handleSettingsSave"
      @cancel="showSettingsModal = false"
    >
      <template #content>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Tema
            </label>
            <div class="flex flex-col gap-2">
              <label class="flex items-center">
                <input 
                  type="radio" 
                  name="theme" 
                  value="light" 
                  class="mr-2"
                  :checked="!isDark"
                  @change="isDark = false"
                >
                <span class="dark:text-white">Claro</span>
              </label>
              <label class="flex items-center">
                <input 
                  type="radio" 
                  name="theme" 
                  value="dark" 
                  class="mr-2"
                  :checked="isDark"
                  @change="isDark = true"
                >
                <span class="dark:text-white">Escuro</span>
              </label>
            </div>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">
              O tema será aplicado imediatamente
            </p>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Notificações
            </label>
            <div class="flex items-center">
              <input type="checkbox" id="notifications" class="mr-2">
              <label for="notifications" class="dark:text-white">
                Receber notificações por email
              </label>
            </div>
          </div>
        </div>
      </template>
    </base-modal>
  </div>
</template>

<script setup>
import MainHeader from "./BodyHeader.vue";
import BaseModal from "./UI/BaseModal.vue";
import { ref, onUnmounted } from "vue";
import { getAuth, signOut } from "firebase/auth";
import { Icon } from "@iconify/vue";
import { Switch, Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { useToggle, useDark } from "@vueuse/core";
import { useRouter } from "vue-router";
import { onValue, getDatabase, query, ref as refFirebase, orderByChild, equalTo, child, get, remove, push } from "@firebase/database";

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
const showDeleteModal = ref(false);
const taskToDelete = ref(null);
const showProfileModal = ref(false);
const showSettingsModal = ref(false);
const userEmail = ref("");

const unsubscribeAuth = auth.onAuthStateChanged((user) => {
  if (user) {
    loggedUser.value = user.uid;
    userEmail.value = user.email;
    fetchUserTasks();
  } else {
    loggedUser.value = null;
    userEmail.value = "";
    taskArray.value = {};
    if (tasksRefListener) {
      tasksRefListener();
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
  
  const tasksRef = refFirebase(db, "tasks");
  push(tasksRef, {
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
  taskToDelete.value = taskKey;
  showDeleteModal.value = true;
}

function confirmDeleteTask() {
  if (!taskToDelete.value) return;
  
  const tasksRef = refFirebase(db, "tasks");
  const taskRef = child(tasksRef, taskToDelete.value);
  get(taskRef)
    .then((snapshot) => {
      const taskData = snapshot.val();
      if (taskData && taskData.userUID === loggedUser.value) {
        remove(taskRef)
          .then(() => {
            console.log("Task removed!");
            taskToDelete.value = null;
          })
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

function cancelDeleteTask() {
  taskToDelete.value = null;
}

function openProfileModal() {
  showProfileModal.value = true;
}

function openSettingsModal() {
  showSettingsModal.value = true;
}

function handleSettingsSave() {
  showSettingsModal.value = false;
}

onUnmounted(() => {
  if (tasksRefListener) {
    tasksRefListener();
  }
  unsubscribeAuth();
});
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