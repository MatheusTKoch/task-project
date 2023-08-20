<template>
  <form>
    <div>
      <label for="username" class="font-medium text-xl" >Email: </label>
      <input type="text" for="username" v-model="username" class="border-black"/>
    </div>
    <div>
      <label for="password" class="font-medium text-xl" min="6" max="15">Password: </label>
      <input type="text" for="password" v-model="password" class="out-of-range:border-red-500 border-black"/>
    </div>
    <span class="p-0.5">
      <base-button @click.prevent="emitUser" class="font-semibold">{{ buttonPrimary }}</base-button>
    </span>
    <span class="p-0.5">
      <base-button @click.prevent="switchText" class="font-semibold">{{
        buttonSecondary
      }}</base-button>
    </span>
  </form>
</template>

<script>
import { ref } from 'vue';

export default {
    setup(props, context) {  
        const buttonPrimary = ref('Login');
        const buttonSecondary = ref('Signup Instead');
        const username = ref('');
        const password = ref('');

        function switchText() {
            if (buttonPrimary.value === 'Login') {
                buttonPrimary.value = 'Signup';
                buttonSecondary.value = 'Login Instead';
            } else {
                buttonPrimary.value = 'Login';
                buttonSecondary.value = 'Signup Instead'
            }
        }

        function emitUser() {
            context.emit('emit-user', [username.value, password.value, buttonPrimary.value]);
            username.value = '';
            password.value = '';
        }

        return {
            buttonPrimary,
            buttonSecondary,
            switchText,
            emitUser,
            username,
            password
        }
    }
}
</script>
