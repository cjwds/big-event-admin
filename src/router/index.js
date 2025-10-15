import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  // vite 的配置 import.meta.env.BASE_URL 是路由的基准地址，默认是 ’/‘
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: []
})

export default router
