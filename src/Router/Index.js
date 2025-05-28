import { createRouter, createWebHashHistory } from 'vue-router'
import IndexPage from '../Pages/IndexPage.vue';
import TyperAfMedlemsskab from '../Pages/TyperAfMedlemsskab.vue';

const router = createRouter({
    history: createWebHashHistory('import.meta.env.BASE_URL'),
    routes: [
        {
            path: '/',
            name: 'home',
            component: IndexPage,
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../Pages/TyperAfMedlemsskab.vue'),
        },


    ],
})

export default router;