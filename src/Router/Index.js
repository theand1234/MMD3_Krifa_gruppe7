import { createRouter, createWebHistory } from 'vue-router'
import IndexPage from '../Pages/IndexPage.vue';
import TyperAfMedlemsskab from '../Pages/TyperAfMedlemsskab.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        name: 'home',
        component: Forside,
    }],
})
const routes = [
    { path: '/', name: 'Index', component: IndexPage },
    { path: 'TyperAfMedlemsskaber', name: 'TyperAfMedlemsskaber', component: TyperAfMedlemsskab },

];
export default router;