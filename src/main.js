
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import {registerIcons} from "@/icons/index.js"

import '@/styles/index.scss' // global css


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
/*注冊icons*/
registerIcons(app)



app.mount('#app')
