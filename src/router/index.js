import { createRouter, createWebHistory } from 'vue-router'
import LoginView  from '@/views/login/index.vue'

export const constantRouterMap = [
  {path: '/', component:LoginView},
]



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRouterMap,
})

export default router
