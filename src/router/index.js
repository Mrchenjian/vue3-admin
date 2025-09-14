import { createMemoryHistory, createRouter,createWebHashHistory } from 'vue-router'

const routes = [

  {
    // 组件二次封装
    path: '/',
    component: () => import('@/views/home/index.vue')
  },
  // 动态表单
  { path: '/form', component: () => import('@/views/form/index.vue') },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})


export default router