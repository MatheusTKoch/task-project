import { createRouter, createWebHistory } from "vue-router";

import userLogin from './components/UserLogin.vue';
import taskBody from './components/TaskBody.vue';
import notFound from './components/UI/NotFound.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/task-project', redirect: 'login'},
        { path: '/task-project/login', component: userLogin },
        { path: '/task-project/tasks', component: taskBody },
        { path: '/task-project/:notFound(.*)', component: notFound }
    ]
});

export default router;