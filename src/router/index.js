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
    },
    {
      name: 'document',
      path: 'https://www.macrozheng.com',
      hidden: false,
      meta: {title: '学习教程', icon: 'document'}
    },
    {
      name: 'video',
      hidden: false,
      path: 'video',
      component: () => import('@/views/home/index.vue'),
      meta: {title: '视频教程', icon: 'video'}
    },
   ]
  },
  {
    path: '',
    component: Layout,
    name:'home1',
    redirect: '/dashboard',
    hidden: false,
    meta: {title: '首页', icon: 'home'},
    children: [{
      path: 'dashboard1',
      name: 'dashboard1',
      hidden: false,
      component: () => import('@/views/home/index.vue'),
      meta: {title: '仪表盘', icon: 'dashboard'}
    },
      {
        name: 'document',
        path: 'https://www.macrozheng.com',
        hidden: false,
        meta: {title: '学习教程', icon: 'document'}
      },
      {
        name: 'video1',
        hidden: false,
        path: 'video1',
        component: () => import('@/views/home/index.vue'),
        meta: {title: '视频教程', icon: 'video'}
      },
    ]
  }
])



const router = createRouter({
  history: createWebHistory(),
  routes: constantRouterMap,
})

export default router



