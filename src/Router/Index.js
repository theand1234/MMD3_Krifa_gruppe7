import { createRouter, createWebHashHistory } from 'vue-router'
import IndexPage from '../Pages/IndexPage.vue'
import TyperAfMedlemsskab from '../Pages/typer-af-Medlemsskab.vue';
import Login from '../Pages/Login.vue';
import Mitkrifa from '../Pages/Mitkrifa.vue';
import Blivmedlem from '../Pages/Blivmedlem.vue';
import MedlemSomStuderende from '../Pages/MedlemSomStuderende.vue'

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
            name: 'BlivMedlem',
            component: Blivmedlem
        },
        {
            path: '/Medlem-som-studerende',
            name: 'MedlemSomStuderende',
            component: MedlemSomStuderende
        }




    ]

})

export default router;