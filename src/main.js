import { createApp } from 'vue'
import App from './App.vue'
import router from './Router/Index.js'
import '@fortawesome/fontawesome-free/css/all.css'
import './assets/Styles/MainStyle.css'
createApp(App)
    .use(router)
    .mount('#app')
