<template>
  <base-header>
     <div class="py-0 px-3 font-semibold">Task Project</div>
     <div class="overflow-hidden relative">
     <Menu>
      <MenuButton>English<Icon icon="raphael:arrowdown" color="black" /></MenuButton>
      <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-out"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems>
        <MenuItem><a href="#"><Icon icon="openmoji:flag-united-states" color="black" />English</a></MenuItem>
        <MenuItem><a href="#"><Icon icon="openmoji:flag-brazil" color="black" />Brazilian Portuguese</a></MenuItem>
      </MenuItems>
    </transition> 
    </Menu>
    </div>
  </base-header>
  <content-box>
    <h1 class="font-semibold text-3xl p-4">The Task Project</h1>
    <h3 class="font-medium text-2xl p-2">
      Please login or signup to start your task list!
    </h3>
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
import BaseHeader from "./UI/BaseHeader.vue";
import { Icon } from "@iconify/vue";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue"; 

export default {
  components: {
    LoginComponent,
    ErrorMessage,
    BaseHeader,
    Icon,
    Menu,
    MenuButton,
    MenuItems,
    MenuItem
  },
  setup() {
    const router = useRouter();
    const errMsg = ref();

    function signupOrLogin(emitInfo) {
      const username = ref(emitInfo[0]);
      const password = ref(emitInfo[1]);
      const buttonText = ref(emitInfo[2]);

      errMsg.value = "";

      if (buttonText.value === "Login") {
        firebase
          .auth()
          .signInWithEmailAndPassword(username.value, password.value)
          .then(() => {
            router.replace("/tasks");
          })
          .catch((error) => {
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
      errMsg,
    };
  },
};
</script>
