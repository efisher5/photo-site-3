import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Nature from '../components/Nature.vue';
import Urban from '../components/Urban.vue';
import Contact from '@/components/Contact.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/nature',
            name: 'nature',
            component: Nature
        },
        {
            path: '/urban',
            name: 'urban',
            component: Urban
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        }
    ]
})

export default router;