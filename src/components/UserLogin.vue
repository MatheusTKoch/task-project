<template>
    <content-box>
            <h1>The Task Project</h1>
            <h3>Please login or signup to start your task list!</h3>
            <login-component @emit-user="signupOrLogin"></login-component>   
    </content-box>
</template>

<script>
import LoginComponent from './LoginComponent.vue';
import { useStore } from 'vuex';

export default {
    components: {
        LoginComponent
    },
    setup() {
        const store = useStore()

        function signupOrLogin(data) {
            store.dispatch('registerUser', data)
            // if (buttonPrimary.value === 'Login') {
            //     store.dispatch('user/loginUser', data)
            // } else if (buttonPrimary.value === 'Signup') {
            //     store.dispatch('user/registerUser', data)
            // }

        }

        return {
            signupOrLogin
        }
    }
}
</script>