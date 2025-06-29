<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-900 m-0 p-0 flex flex-col">
    <base-header>
      <div class="flex justify-between items-center w-full">
        <div class="font-bold text-indigo-800 dark:text-indigo-200">Task Project</div>
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
        </div>
      </div>
    </base-header>

    <div class="flex-1">
      <content-box>
        <h1 class="font-bold text-xl mb-2 text-indigo-800 dark:text-indigo-200 text-center">Recuperar Senha</h1>
        <h3 class="font-medium text-base mb-4 text-indigo-600 dark:text-indigo-300 text-center">
          Digite seu email para receber as instruções de recuperação de senha
        </h3>

    <form @submit.prevent="sendPasswordReset" class="space-y-6">
      <div class="relative">
        <input
          type="email"
          class="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
          id="email"
          placeholder="seu@email.com"
          v-model="email"
          required
        />
        <label
          for="email"
          class="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
        >
          Email
        </label>
      </div>

      <div class="flex gap-4 justify-center">
        <base-button 
          type="button" 
          @click="goBack"
          custom-class="bg-gray-500 hover:bg-gray-600 text-white border-gray-500 font-semibold"
        >
          Cancelar
        </base-button>
        <base-button 
          type="submit" 
          :disabled="isLoading || !email.trim()"
          custom-class="bg-indigo-500 hover:bg-indigo-600 text-white border-indigo-500 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {{ isLoading ? 'Enviando...' : 'Enviar Instruções' }}
        </base-button>
      </div>
    </form>

    <error-message v-if="errMsg">{{ errMsg }}</error-message>
  </content-box>
    </div>

    <!-- Footer -->
    <app-footer />

  <!-- Modal de Sucesso -->
  <base-modal 
    v-model="showSuccessModal"
    title="Email Enviado!"
    :message="`Instruções de recuperação de senha foram enviadas para ${email}. Verifique sua caixa de entrada e spam.`"
    confirm-text="Voltar ao Login"
    @confirm="handleSuccessModalConfirm"
  />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { sendPasswordResetEmail, getAuth } from "firebase/auth";
import BaseHeader from "./UI/BaseHeader.vue";
import ContentBox from "./UI/ContentBox.vue";
import BaseButton from "./UI/BaseButton.vue";
import ErrorMessage from "./UI/ErrorMessage.vue";
import BaseModal from "./UI/BaseModal.vue";
import AppFooter from "./UI/AppFooter.vue";
import { Icon } from "@iconify/vue";
import { Switch } from "@headlessui/vue";
import { useToggle, useDark } from "@vueuse/core";

const router = useRouter();
const auth = getAuth();
const isDark = useDark();
const toggleDark = useToggle(isDark);

const email = ref("");
const errMsg = ref("");
const isLoading = ref(false);
const showSuccessModal = ref(false);

function goBack() {
  router.push("/login");
}

async function sendPasswordReset() {
  if (!email.value.trim()) {
    errMsg.value = "Por favor, digite seu email";
    return;
  }

  isLoading.value = true;
  errMsg.value = "";

  try {
    await sendPasswordResetEmail(auth, email.value);
    showSuccessModal.value = true;
  } catch (error) {
    console.error("Password reset error:", error);
    switch (error.code) {
      case "auth/user-not-found":
        errMsg.value = "Não existe uma conta com este email";
        break;
      case "auth/invalid-email":
        errMsg.value = "Email inválido";
        break;
      case "auth/too-many-requests":
        errMsg.value = "Muitas tentativas. Tente novamente mais tarde";
        break;
      default:
        errMsg.value = "Erro ao enviar email: " + error.message;
        break;
    }
  } finally {
    isLoading.value = false;
  }
}

function handleSuccessModalConfirm() {
  showSuccessModal.value = false;
  router.push("/login");
}
</script>
