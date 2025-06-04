import { createRouter, createWebHashHistory } from 'vue-router'
import IndexPage from '../Pages/IndexPage.vue'
import TyperAfMedlemsskab from '../Pages/typer-af-Medlemsskab.vue';

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'IndexPage',
            component: IndexPage,
        },
        {
            path: '/typer-af-medlemsskaber',
            name: 'TyperAfMedlemsskaber',
            component: TyperAfMedlemsskab
        },


    ]

})

export default router;