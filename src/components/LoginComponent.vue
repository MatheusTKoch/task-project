<template>
  <form>
    <div>
      <label for="username">Username</label>
      <input type="text" for="username" v-model="username"/>
    </div>
    <div>
      <label for="password">Password</label>
      <input type="text" for="password" v-model="password"/>
    </div>
    <span>
      <base-button @click.prevent="emitUser">{{ buttonPrimary }}</base-button>
    </span>
    <span>
      <base-button @click.prevent="switchText">{{
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
