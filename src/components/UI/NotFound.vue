<template>
    <section>
        <content-box>
            <h2>Page Not Found</h2>
            <div>This page could not be found - do you want to return to <router-link to="/login">login</router-link>?</div>
        </content-box>
    </section>
</template>

<script>
import ContentBox from './ContentBox.vue';

export default {
    components: {
        ContentBox        
    }
}
</script>