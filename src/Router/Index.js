import { createRouter, createWebHistory } from 'vue-router'
import Forside from '../Pages/IndexPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        name: 'home',
        component: Forside,
    }],
})

export default router;