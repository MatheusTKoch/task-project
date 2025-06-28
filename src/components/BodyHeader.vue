<template>
  <section class="dark:bg-gray-900">
    <base-header>
      <slot></slot>
    </base-header>
    <p class="text-3xl font-semibold p-3 dark:text-white">Minhas Tarefas</p>
    <div class="text-2xl font-normal pb-5 dark:text-white">Adicione uma tarefa abaixo (apertando Enter) e marque as tarefas finalizadas</div>
    <div class="my-4">
      <input
        placeholder="Add a new task!"
        id="insertField"
        type="text"
        v-model="taskText"
        @keydown.enter="submitTask(taskText)"
      />
      <button 
        @click="submitTask(taskText)" 
        class="bg-blue-500 text-white px-4 py-2 rounded ml-2 hover:bg-blue-600"
      >
        Add
      </button>
    </div>
  </section>
</template>

<script>
import { onBeforeUnmount, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { getAuth } from "firebase/auth";
import BaseHeader from "./UI/BaseHeader.vue"

export default {
  components: {
    BaseHeader
  },
  setup() {
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

    return {
      taskText,
      submitTask,
      logoutUser,
    };
  },
};
</script>

<style scoped>

input {
  border: 0.25px solid;
  border-radius: 7px;
  width: 400px;
}

</style>
