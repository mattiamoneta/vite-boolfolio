import { createRouter, createWebHistory } from 'vue-router';
import MainPage from './pages/MainPage.vue';
import ProjectPage from './pages/ProjectPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: MainPage
        },
        {
            path: '/project/:slug',
            name: 'project',
            component: ProjectPage
        }
    ]
});

export { router };