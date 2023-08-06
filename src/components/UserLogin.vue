<template>
    <content-box>
        <form>
            <h1>The Task Project</h1>
            <h3>Please login or signup to start your task list!</h3>
            <div>
            <label for="username">Username</label>
            <input type="text" for="username"/>
            </div>
            <div>
            <label for="password">Password</label>
            <input type="text" for="password"/>
            </div>
            <span>
            <base-button>{{ buttonPrimary }}</base-button>
            </span>
            <span>
            <base-button @click.prevent="switchText">{{ buttonSecondary }}</base-button>    
            </span>    
        </form>
    </content-box>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const buttonPrimary = ref('Login');
        const buttonSecondary = ref('Signup Instead');

        function switchText() {
            if (buttonPrimary.value === 'Login') {
                buttonPrimary.value = 'Signup';
                buttonSecondary.value = 'Login Instead';
            } else {
                buttonPrimary.value = 'Login';
                buttonSecondary.value = 'Signup Instead'
            }
        }

        return {
            buttonPrimary,
            buttonSecondary,
            switchText
        }
    }
}
</script>