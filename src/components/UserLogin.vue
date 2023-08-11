<template>
  <content-box>
    <h1>The Task Project</h1>
    <h3>Please login or signup to start your task list!</h3>
    <login-component @emit-user="signupOrLogin"></login-component>
    <error-message v-if="errMsg">{{ errMsg }}</error-message>
  </content-box>
</template>

<script>
import LoginComponent from "./LoginComponent.vue";
import ErrorMessage from "./UI/ErrorMessage.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import firebase from "firebase";

export default {
  components: {
    LoginComponent,
    ErrorMessage
  },
  setup() {
    const router = useRouter();
    const errMsg = ref();

    function signupOrLogin(emitInfo) {
      const username = ref(emitInfo[0]);
      const password = ref(emitInfo[1]);
      const buttonText = ref(emitInfo[2]); 
      
      errMsg.value = '';

      if (buttonText.value === "Login") {
        firebase
          .auth()
          .signInWithEmailAndPassword(username.value, password.value)
          .then(() => {
            router.replace("/tasks");
          })
          .catch(error => {
            switch (error.code) {
              case "auth/invalid-email":
                errMsg.value = "Invalid email";
                break;
              case "auth/user-not-found":
                errMsg.value = "No account with that email was found";
                break;
              case "auth/wrong-password":
                errMsg.value = "Incorrect password";
                break;
              default:
                errMsg.value = "Email or password was incorrect";
                break;
            }
          });
      } else if (buttonText.value === "Signup") {
        firebase
          .auth()
          .createUserWithEmailAndPassword(username.value, password.value)
          .then(() => {
            alert("User created with success!");
          })
          .catch((error) => {
            console.log(error.code);
            alert(error.message);
          });
      }
    }

    return {
      signupOrLogin,
      errMsg
    };
  },
};
</script>
