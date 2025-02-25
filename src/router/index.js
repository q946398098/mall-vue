import { createRouter, createWebHistory } from 'vue-router'
import LoginView  from '@/views/login/index.vue'
import Ceshi  from '@/views/ceshi.vue'

export const constantRouterMap = [
  {path: '/x', component:LoginView},
  {path: '/', component:Ceshi},
]



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRouterMap,
})

export default router
