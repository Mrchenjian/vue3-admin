import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', component: ()=>import('../views/home/index.vue') },
  // { path: '/about', component: AboutView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})


export default router