import { createRouter, createWebHashHistory } from 'vue-router'
import IndexPage from '../Pages/IndexPage.vue'
import TyperAfMedlemsskab from '../Pages/typer-af-Medlemsskab.vue';
import Login from '../Pages/Login.vue';
import Mitkrifa from '../Pages/Mitkrifa.vue';

import MedlemSomStuderende from '../Pages/MedlemSomStuderende.vue'
import Medlemsfordele from '../Pages/Medlemsfordele.vue'

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
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/MitKrifa',
            name: 'Mitkrifa',
            component: Mitkrifa
        },
        {
            path: '/Bliv-Medlem',
            name: 'Blivmedlem',
            component: Blivmedlem
        },
        {
            path: '/Medlem-som-studerende',
            name: 'MedlemSomStuderende',
            component: MedlemSomStuderende
        },
        {
            path: '/MedlemsFordele',
            name: 'Medlemsfordele',
            component: Medlemsfordele
        }




    ]

})

export default router;