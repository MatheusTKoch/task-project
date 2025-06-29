<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-900 m-0 p-0 flex flex-col">
    <main-header>
      <div class="flex justify-between items-center w-full">
        <div class="font-bold text-indigo-800 dark:text-indigo-200 flex items-center gap-2">
          📋 Task Project
        </div>
        <div class="flex items-center gap-2">
          <Icon icon="iconamoon:mode-light" :color="isDark ? '#fbbf24' : '#f59e0b'" width="26" height="26" />
          <Switch
            @click="toggleDark()"
            v-model="isDark"
            :class="isDark ? 'bg-indigo-600' : 'bg-indigo-400'"
            class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors"
          >
            <span
              :class="isDark ? 'translate-x-6' : 'translate-x-1'"
              class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform shadow-sm"
            />
          </Switch>
          <Icon 
            icon="material-symbols:dark-mode-outline" 
            :color="isDark ? '#c7d2fe' : '#6366f1'" 
            width="26" 
            height="26" 
          />
          
          <Popover class="relative ml-4">
            <PopoverButton class="flex items-center gap-2 px-3 py-2 rounded-lg bg-indigo-100 hover:bg-indigo-200 dark:bg-slate-700 dark:hover:bg-slate-600 transition-colors border border-indigo-200 dark:border-slate-600">
              <Icon 
                icon="mdi:account-circle" 
                :color="isDark ? '#c7d2fe' : '#4f46e5'" 
                width="24" 
                height="24" 
              />
              <Icon 
                icon="mdi:chevron-down" 
                :color="isDark ? '#c7d2fe' : '#4f46e5'" 
                width="16" 
                height="16" 
              />
            </PopoverButton>

            <PopoverPanel class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-md shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none border border-indigo-100 dark:border-slate-700">
              <div class="px-1 py-1">
                <div class="px-3 py-2 border-b border-indigo-200 dark:border-slate-600">
                  <p class="text-sm font-medium text-indigo-900 dark:text-indigo-200">
                    {{ userEmail || 'Usuário' }}
                  </p>
                  <p class="text-xs text-indigo-600 dark:text-indigo-400">
                    Logado
                  </p>
                </div>

                <button
                  @click="openProfileModal"
                  class="group flex w-full items-center rounded-md px-3 py-2 text-sm text-indigo-700 dark:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-slate-700"
                >
                  <Icon 
                    icon="mdi:account-edit" 
                    class="mr-3 h-4 w-4" 
                    :color="isDark ? '#a5b4fc' : '#4338ca'"
                  />
                  Editar Perfil
                </button>

                <button
                  @click="openSettingsModal"
                  class="group flex w-full items-center rounded-md px-3 py-2 text-sm text-indigo-700 dark:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-slate-700"
                >
                  <Icon 
                    icon="mdi:cog" 
                    class="mr-3 h-4 w-4" 
                    :color="isDark ? '#a5b4fc' : '#4338ca'"
                  />
                  Configurações
                </button>

                <div class="border-t border-indigo-200 dark:border-slate-600 mt-1 pt-1">
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
    <div class="flex-1 px-4 pb-4">
      <div v-if="isLoading" class="flex justify-center items-center h-32">
        <div class="spinner"></div>
      </div>
      <div v-else class="flex justify-center">
        <div class="task-list">
          <task-item
            v-for="(task, key) in taskArray"
            :key="key"
            :task="task"
            @delete-task="deleteTask(key)"
            @update-task="updateTask(key, $event)"
          />
          <div v-if="Object.keys(taskArray).length === 0" class="empty-state">
            <div class="text-center py-12">
              <Icon 
                icon="mdi:clipboard-text-outline" 
                :color="isDark ? '#a5b4fc' : '#6366f1'"
                width="64" 
                height="64"
                class="mx-auto mb-4"
              />
              <h3 class="text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-2">
                Nenhuma tarefa encontrada
              </h3>
              <p class="text-indigo-600 dark:text-indigo-300">
                Adicione uma nova tarefa usando o campo acima
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <app-footer />

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
import AppFooter from "./UI/AppFooter.vue";
import TaskItem from "./UI/TaskItem.vue";
import { ref, onUnmounted } from "vue";
import { getAuth, signOut } from "firebase/auth";
import { Icon } from "@iconify/vue";
import { Switch, Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { useToggle, useDark } from "@vueuse/core";
import { useRouter } from "vue-router";
import { onValue, getDatabase, query, ref as refFirebase, orderByChild, equalTo, child, get, remove, push, set } from "@firebase/database";

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
    completed: false,
    subtasks: []
  })
    .then(() => {
      newTaskText.value = "";
    })
    .catch((error) => {
      console.error("Error adding task:", error);
    });
}

function updateTask(taskKey, updatedTask) {
  if (!loggedUser.value) return;
  
  const tasksRef = refFirebase(db, "tasks");
  const taskRef = child(tasksRef, taskKey);
  
  // Verifica se a tarefa pertence ao usuário
  get(taskRef)
    .then((snapshot) => {
      const taskData = snapshot.val();
      if (taskData && taskData.userUID === loggedUser.value) {
        // Atualiza a tarefa mantendo o userUID
        const taskToUpdate = {
          ...updatedTask,
          userUID: loggedUser.value
        };
        
        // Remove a chave da tarefa para não causar conflito
        delete taskToUpdate.key;
        
        set(taskRef, taskToUpdate)
          .then(() => {
            console.log("Task updated!");
          })
          .catch((error) => {
            console.error("Error updating task:", error);
          });
      } else {
        console.error("Access denied: task doesn't belong to user.");
      }
    })
    .catch((error) => {
      console.error("Error fetching task data:", error);
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
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 0;
}

.empty-state {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border: 2px dashed rgba(99, 102, 241, 0.3);
  border-radius: 12px;
  margin: 2rem 0;
}

.dark .empty-state {
  background: rgba(51, 65, 85, 0.7);
  border-color: rgba(148, 163, 184, 0.3);
}

.spinner {
  width: 32px;
  height: 32px;
  border: 4px solid rgba(99, 102, 241, 0.1);
  border-left-color: #6366f1;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>