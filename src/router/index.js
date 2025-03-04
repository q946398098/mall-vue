import { createRouter, createWebHistory } from 'vue-router'
import LoginView  from '@/views/login/index.vue'
import Layout from '@/views/layout/Layout.vue'
import Test  from '@/views/test.vue'
import {reactive} from "vue";
import * as test from "node:test";
import chart from "@/views/home/chart.vue";

export const constantRouterMap =[
  {path: '/login', component:LoginView , is_menu: false,fl_permission:'Y'},
  {path: '/test', component:Test, is_menu: false,fl_permission:'Y'},
  {
    path: '',
    component: Layout,
    name:'home',
    redirect: '/dashboard',
    is_menu: true,
    fl_permission:'Y', //有权限的意思
    meta: {title: '首页', icon: 'home'},
    children: [{
      path: 'dashboard',
      name: 'dashboard',
      is_menu: true,
      fl_permission:'Y',
      component: () => import('@/views/home/index.vue'),
      meta: {title: '仪表盘', icon: 'dashboard'},
      children: [
        {
          path: '/chart',
          component: chart,
          fl_permission:'N',
          is_menu:false,
          name:'chart',
          title:'chart',
          hidden: true,
        }
      ]
    }]
  },
  {
    path:'',
    name:'teacher',
    is_menu:true,
    fl_permission:'N',
    meta:{title: '教程',icon:'document'},
    children: [
      {
        path:'https://router.vuejs.org/zh/guide/',
        name:'router',
        fl_permission:'Y',
        meta: {title: 'vue-Router', icon: 'document'},
        is_menu:true,
      },
      {
        name: 'vue',
        path: 'https://cn.vuejs.org/',
        fl_permission:'Y',
        is_menu:true,
        meta: {title: 'Vue教程', icon: 'document'}
      },
      {
        name: 'pinia',
        path: 'https://pinia.vuejs.org/',
        is_menu:true,
        fl_permission:'Y',
        meta: {title: 'Pinia教程', icon: 'document'}
      },
    ],
  }
]



const router = createRouter({
  history: createWebHistory(),
  routes: constantRouterMap,
})

export default router



