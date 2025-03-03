import { createRouter, createWebHistory } from 'vue-router'
import LoginView  from '@/views/login/index.vue'
import Layout from '@/views/layout/Layout.vue'
import Test  from '@/views/test.vue'
import {reactive} from "vue";

export const constantRouterMap = reactive([
  {path: '/login', component:LoginView , hidden: true},
  {path: '/test', component:Test, hidden: true},
  {
    path: '',
    component: Layout,
    name:'home',
    redirect: '/dashboard',
    hidden: false,
    meta: {title: '首页', icon: 'home'},
    children: [{
      path: 'dashboard',
      name: 'dashboard',
      hidden: false,
      component: () => import('@/views/home/index.vue'),
      meta: {title: '仪表盘', icon: 'dashboard'}
    }]
  },
  {
    path:'',
    name:'teacher',
    hidden: false,
    meta:{title: '教程',icon:'document'},
    children: [
      {
        path:'https://router.vuejs.org/zh/guide/',
        name:'router',
        meta: {title: 'vue-Router', icon: 'document'},
        hidden: false,
      },
      {
        name: 'vue',
        path: 'https://cn.vuejs.org/',
        hidden: false,
        meta: {title: 'Vue教程', icon: 'document'}
      },
      {
        name: 'pinia',
        path: 'https://pinia.vuejs.org/',
        hidden: false,
        meta: {title: 'Pinia教程', icon: 'document'}
      },
    ],
  }
])



const router = createRouter({
  history: createWebHistory(),
  routes: constantRouterMap,
})

export default router



