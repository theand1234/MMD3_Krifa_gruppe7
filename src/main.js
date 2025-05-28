import { createApp } from 'vue'
import App from './App.vue'
import router from './Router/Index.js'
import './assets/Styles/MainStyle.css'

createApp(App)
    .use(router)
    .mount('#app')
