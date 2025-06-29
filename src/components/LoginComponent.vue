<template>
  <form>
    <div class="relative mb-4">
      <input
        type="text"
        class="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
        id="email"
        placeholder="name@example.com"
        v-model="username"
        @keydown.enter="handleLogin"
      />
      <label
        for="email"
        class="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
        >Email</label
      >
    </div>
    <div class="relative">
      <input
        :type="showHide ? 'text' : 'password'"
        class="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem] bg-"
        id="password"
        placeholder="Password"
        v-model="password"
        @keydown.enter="handleLogin"
      />
      <div class="py-4">
      <input type="checkbox" id="showPassword" @change="showHidePassword"/>
      <label for="showPassword" class="p-1 dark:text-white">Mostrar Senha</label>
      </div>
      <label
        for="password"
        class="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
        >Senha</label
      >
    </div>
    
    <div class="flex gap-4 justify-center mt-6">
      <base-button 
        @click.prevent="handleLogin" 
        custom-class="bg-blue-500 hover:bg-blue-600 text-white border-blue-500 font-semibold disabled:opacity-50"
        :disabled="!isFormValid"
      >
        Login
      </base-button>
      <base-button 
        @click.prevent="handleSignup" 
        custom-class="bg-green-500 hover:bg-green-600 text-white border-green-500 font-semibold disabled:opacity-50"
        :disabled="!isFormValid"
      >
        Registrar-se
      </base-button>
    </div>
    
    <div class="mt-4 text-center">
      <router-link 
        to="/forgot-password" 
        class="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
      >
        Esqueci minha senha
      </router-link>
    </div>
  </form>
</template>

<script setup>
import { ref, computed } from "vue";
import { Icon } from "@iconify/vue";
import BaseButton from "./UI/BaseButton.vue";

const emit = defineEmits(['emit-user']);

const username = ref("");
const password = ref("");
const showHide = ref(false);

const isFormValid = computed(() => {
  return username.value.trim().length > 0 && password.value.trim().length > 0;
});

function handleLogin() {
  if (!isFormValid.value) return;
  
  emit("emit-user", [
    username.value,
    password.value,
    "Login",
  ]);
  clearForm();
}

function handleSignup() {
  if (!isFormValid.value) return;
  
  emit("emit-user", [
    username.value,
    password.value,
    "Signup",
  ]);
  clearForm();
}

function clearForm() {
  username.value = "";
  password.value = "";
}

function showHidePassword() {
  showHide.value = !showHide.value;
}
</script>
