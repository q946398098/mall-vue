import 'element-plus/dist/index.css'
import '@/styles/index.scss' // global css
import App from './App.vue'
import ElementPlus from 'element-plus'
import router from './router'
import '@/router/routerGuard.js';
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {registerIcons} from "@/icons/index.js"
import {createPersistedState} from "pinia-persistedstate-plugin";

const app = createApp(App)
const pinia = createPinia()
const persistedState = createPersistedState();
pinia.use(persistedState)
app.use(pinia)
registerIcons(app)

app.use(router)
app.use(ElementPlus)
/*注冊icons*/
app.mount('#app')

