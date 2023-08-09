<template>
  <content-box>
    <h1>The Task Project</h1>
    <h3>Please login or signup to start your task list!</h3>
    <login-component @emit-user="signupOrLogin"></login-component>
  </content-box>
</template>

<script>
import LoginComponent from "./LoginComponent.vue";
import { useStore } from "vuex";
import { ref } from "vue";

export default {
  components: {
    LoginComponent,
  },
  setup() {
    const store = useStore();

    function signupOrLogin(emitInfo) {
      const username = ref(emitInfo[0]);
      const password = ref(emitInfo[1]);
      const buttonText = ref(emitInfo[2]);

      if (buttonText.value === "Login") {
        store.dispatch("user/loginUser", [username, password]);
      } else if (buttonText.value === "Signup") {
        store.dispatch("user/addNewUser", [username, password]);
      }
    }

    return {
      signupOrLogin,
    };
  },
};
</script>
