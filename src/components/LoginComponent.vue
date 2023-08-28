<template>
  <form>
    <div class="relative mb-3">
      <input
        type="text"
        class="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
        id="email"
        placeholder="name@example.com"
        v-model="username"
      />
      <label
        for="email"
        class="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
        >Email address</label
      >
    </div>
    <div class="relative mb-3">
      <input
        :type="showHide ? 'text' : 'password'"
        class="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem] bg-"
        id="password"
        placeholder="Password"
        v-model="password"
      />
      <div class="py-1">
      <input type="checkbox" id="showPassword" @change="showHidePassword"/>
      <label for="showPassword" class="p-1">Show Password</label>
      </div>
      <label
        for="password"
        class="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
        >Password</label
      >
    </div>
    <span class="p-0.5">
      <base-button @click.prevent="emitUser" class="font-semibold">{{
        buttonPrimary
      }}</base-button>
    </span>
    <span class="p-0.5">
      <base-button @click.prevent="switchText" class="font-semibold">{{
        buttonSecondary
      }}</base-button>
    </span>
  </form>
</template>

<script>
import { ref } from "vue";
import { Icon } from "@iconify/vue";

export default {
  components: {
    Icon
  },
  setup(props, context) {
    const buttonPrimary = ref("Login");
    const buttonSecondary = ref("Signup Instead");
    const username = ref("");
    const password = ref("");
    const showHide = ref(false);

    function switchText() {
      if (buttonPrimary.value === "Login") {
        buttonPrimary.value = "Signup";
        buttonSecondary.value = "Login Instead";
      } else {
        buttonPrimary.value = "Login";
        buttonSecondary.value = "Signup Instead";
      }
    }

    function emitUser() {
      context.emit("emit-user", [
        username.value,
        password.value,
        buttonPrimary.value,
      ]);
      username.value = "";
      password.value = "";
    }

    function showHidePassword() {
      if (showHide.value === false) {
        showHide.value = true;
      } else if (showHide.value === true) {
        showHide.value = false;
      }
      console.log(showHide)
    }

    return {
      buttonPrimary,
      buttonSecondary,
      switchText,
      emitUser,
      username,
      password,
      showHide,
      showHidePassword
    };
  },
};
</script>
