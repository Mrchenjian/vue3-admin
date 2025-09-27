import { createMemoryHistory, createRouter,createWebHashHistory,type RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/', 
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index.vue'),
      },
    ],
  },

  { 
    // 动态表单
    path: '/form-1', 
    component: () => import('@/views/form/index.vue') 
  },
    {
    // 组件二次封装
    path: '/form-2',
    component: () => import('@/views/home/index.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})


export default router