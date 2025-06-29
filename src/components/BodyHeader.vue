<template>
  <section>
    <base-header>
      <slot></slot>
    </base-header>
    <div class="max-w-4xl mx-auto px-4">
      <p class="text-3xl font-bold py-6 text-indigo-800 dark:text-indigo-200 text-center flex items-center justify-center gap-2">
        📋 Minhas Tarefas
      </p>
      <div class="text-lg font-normal pb-6 text-indigo-600 dark:text-indigo-300 text-center">
        Adicione uma tarefa abaixo (apertando Enter) e organize suas atividades com subtarefas
      </div>
      <div class="flex justify-center mb-8">
        <div class="flex gap-2 w-full max-w-md">
          <input
            placeholder="Adicionar nova tarefa..."
            id="insertField"
            type="text"
            v-model="taskText"
            @keydown.enter="submitTask(taskText)"
            class="flex-1 px-4 py-2 border border-indigo-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-slate-700 dark:border-slate-600 dark:text-white dark:placeholder-slate-400 bg-white/80 backdrop-blur-sm"
          />
          <button 
            @click="submitTask(taskText)" 
            class="bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-600 transition-colors font-medium shadow-md hover:shadow-lg"
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onBeforeUnmount, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { getAuth } from "firebase/auth";
import BaseHeader from "./UI/BaseHeader.vue"

const taskText = ref('');
const store = useStore();
const router = useRouter();

function submitTask() {
  store.dispatch("submitData", taskText.value);
    taskText.value = '';
}

function logoutUser() {
  getAuth().signOut();
  router.replace("/login");
}

function checkUserLogged() {
  const userLogged = getAuth().onAuthStateChanged(function (logged) {
    if (!logged) {
      router.replace("/");
    }
  });
}

onBeforeUnmount(() => {
  checkUserLogged();
});
</script>

<style scoped>
</style>
