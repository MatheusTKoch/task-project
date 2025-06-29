<script setup>
import LoginComponent from "./LoginComponent.vue";
import ErrorMessage from "./UI/ErrorMessage.vue";
import ContentBox from "./UI/ContentBox.vue";
import BaseModal from "./UI/BaseModal.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import {  signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import BaseHeader from "./UI/BaseHeader.vue";
import { Icon } from "@iconify/vue";
import { Menu, MenuButton, MenuItems, MenuItem, Switch } from "@headlessui/vue";
import { useToggle, useDark } from "@vueuse/core"; 

const router = useRouter();
const errMsg = ref();
const isDark = useDark();
const toggleDark = useToggle(isDark);
const auth = getAuth();
const showSuccessModal = ref(false);

function signupOrLogin(emitInfo) {
  const username = ref(emitInfo[0]);
  const password = ref(emitInfo[1]);
  const buttonText = ref(emitInfo[2]);

  errMsg.value = "";
  
  
  if (buttonText.value === "Login") {
    signInWithEmailAndPassword(auth ,username.value, password.value)
      .then(() => {
        router.replace("/tasks");
      })
      .catch((error) => {
        console.log("Login error:", error);
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
    createUserWithEmailAndPassword(auth, username.value, password.value)
      .then(() => {
        showSuccessModal.value = true;
      })
      .catch((error) => {
        console.log(error.code);
        switch (error.code) {
          case "auth/email-already-in-use":
            errMsg.value = "Este email já está sendo usado";
            break;
          case "auth/weak-password":
            errMsg.value = "A senha deve ter pelo menos 6 caracteres";
            break;
          case "auth/invalid-email":
            errMsg.value = "Email inválido";
            break;
          default:
            errMsg.value = "Erro ao criar conta: " + error.message;
            break;
        }
      });
  } else {
    console.log("Unknown button text:", buttonText.value);
  }
}

function handleSuccessModalConfirm() {
  showSuccessModal.value = false;
  router.push("/tasks");
}
</script>

<template>
  <div class="dark:bg-gray-900 min-h-screen m-0 p-0">
    <base-header>
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
        </div>
      </div>
    </base-header>
    
    <content-box>
      <h1 class="font-semibold text-2xl mb-2 dark:text-white text-center">Task Project</h1>
      <h3 class="font-medium text-lg mb-6 dark:text-white text-center">
        Faça login ou crie uma conta para começar a acompanhar suas tarefas!
      </h3>
      <login-component @emit-user="signupOrLogin"></login-component>
      <error-message v-if="errMsg">{{ errMsg }}</error-message>
    </content-box>

    <base-modal 
      v-model="showSuccessModal"
      title="Conta Criada com Sucesso!"
      message="Sua conta foi criada com sucesso! Você será redirecionado para a página de tarefas."
      confirm-text="Continuar"
      @confirm="handleSuccessModalConfirm"
    />
  </div>
</template>
