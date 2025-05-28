import { createRouter, createWebHashHistory } from 'vue-router'
import IndexPage from '../Pages/IndexPage.vue'
import TyperAfMedlemsskab from '../Pages/TyperAfMedlemsskab.vue';

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'IndexPage',
            component: IndexPage,
        },
        {
            path: '/TyperAfMedlemsskaber',
            name: 'TyperAfMedlemsskaber',
            component: TyperAfMedlemsskab
        },


    ],
})

export default router;