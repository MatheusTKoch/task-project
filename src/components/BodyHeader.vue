<template>
  <section class="dark:bg-gray-900">
    <base-header><base-button class="px-1 text-sm font-semibold left-10" @click="logoutUser">Logout User</base-button></base-header>
    <p class="text-3xl font-semibold p-3 dark:text-white">My Tasks</p>
    <div class="text-2xl font-normal pb-5 dark:text-white">Add a task below (with Enter) and click over the finished tasks</div>
    <input
      id="insertField"
      type="text"
      v-model="taskText"
      @keydown.enter="submitTask(taskText)"
    />
  </section>
</template>

<script>
import { onBeforeUnmount, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import firebase from "firebase";
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
      firebase.auth().signOut();
      router.replace("/login");
    }

    function checkUserLogged() {
      const userLogged = firebase.auth().onAuthStateChanged(function (logged) {
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
