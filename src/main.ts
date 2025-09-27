import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { createPinia } from 'pinia'
import 'normalize.css/normalize.css'
import 'virtual:uno.css'
import '@/style/index.scss'
const pinia = createPinia()
let app = createApp(App)

/**
 *  注册element-plus图标
 */
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(pinia).use(router).mount('#app')