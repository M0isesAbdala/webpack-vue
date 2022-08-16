import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: require('../pages/Home.vue').default
    },
    {
        path: '/about',
        name: 'About',
        component: require('../pages/About.vue').default
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;