import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import About from './pages/About.vue';
import EventList from './pages/EventList.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/eventi',
            name: 'events',
            component: EventList
        },
    ]
});

export { router };