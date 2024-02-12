import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import About from './pages/About.vue';
import EventList from './pages/EventList.vue';
import EventShow from './pages/EventShow.vue';
import TagsList from './pages/TagsList.vue';


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
            component: EventList,
            props: true
        },
        {
            path: '/eventi/:id',
            name: 'event-show',
            component: EventShow,
            props: true
        },
        {
            path: '/tags',
            name: 'tags',
            component: TagsList,
            props: true
        }
    ]
});

export { router };