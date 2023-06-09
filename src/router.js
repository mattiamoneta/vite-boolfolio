import { createRouter, createWebHistory } from 'vue-router';
import MainPage from './pages/MainPage.vue';
import ProjectPage from './pages/ProjectPage.vue';
import ContactsPage from './pages/ContactsPage.vue';
import AboutPage from './pages/AboutPage.vue';
import PageNotFound from './pages/PageNotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: MainPage
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: ContactsPage
        },
        {
            path: '/about',
            name: 'about',
            component: AboutPage
        },
        {
            path: '/project/:slug',
            name: 'project',
            component: ProjectPage
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: PageNotFound
        }
    ]
});

export { router };