import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [

  { 
    // 组件二次封装
    path: '/', 
    component: () => import('../views/home/index.vue') 
  },
  // { path: '/about', component: AboutView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})


export default router