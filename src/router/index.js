import { createRouter, createWebHistory } from 'vue-router'
import LoginView  from '@/views/login/index.vue'
import Layout from '@/views/layout/Layout.vue'
import Test  from '@/views/test.vue'

export const constantRouterMap = [
  {path: '/login', component:LoginView},
  {path: '/test', component:Test},
  {
    path: '',
    component: Layout,
    redirect: '/home',
    meta: {title: '首页', icon: 'home'},
    children: [{
      path: 'home',
      name: 'home',
      component: () => import('@/views/home/index.vue'),
      meta: {title: '仪表盘', icon: 'dashboard'}
    },
      {
        name: 'document',
        path: 'https://www.macrozheng.com',
        meta: {title: '学习教程', icon: 'document'}
      },
      {
        name: 'video',
        path: 'https://www.macrozheng.com/mall/catalog/mall_video.html',
        meta: {title: '视频教程', icon: 'video'}
      },
    ]
  }
]



const router = createRouter({
  history: createWebHistory(),
  routes: constantRouterMap,
})

export default router
