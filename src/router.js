import { createRouter, createWebHistory } from "vue-router";

import userLogin from './components/UserLogin.vue';
import taskBody from './components/TaskBody.vue';
import notFound from './components/UI/NotFound.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: 'login'},
        { path: '/login', component: userLogin },
        { path: '/tasks', component: taskBody },
        { path: '/:notFound(.*)', component: notFound }
    ]
});

export default router;