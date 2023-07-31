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
            <base-button>Login</base-button>
            </span>
            <span>
            <base-button>Signup Instead</base-button>    
            </span>    
        </form>
    </content-box>
</template>

<script>

export default {

}
</script>