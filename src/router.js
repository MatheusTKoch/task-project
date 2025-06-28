import { createRouter, createWebHashHistory } from "vue-router";
import userLogin from './components/UserLogin.vue';
import notFound from './components/UI/NotFound.vue';


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', redirect: 'login'},
        { path: '/login', component: userLogin },
        { path: '/tasks', name: 'Tasks', component: () => import('./components/TaskBody.vue'), meta: { requiresAuth: true } },
        { path: '/:notFound(.*)', component: notFound }
    ]
});

export default router;