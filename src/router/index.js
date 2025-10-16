import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  // vite 的配置 import.meta.env.BASE_URL 是路由的基准地址，默认是 ’/‘
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/login', component: () => import('@/views/login/LoginPage.vue') },
    {
      path: '/',
      component: () => import('@/views/layout/LayoutBox.vue'),
      redirect: '/article/manage',
      children: [
        {
          path: '/article/manage',
          component: () => import('@/views/article/ArticleManage.vue')
        },
        {
          path: '/article/channel',
          component: () => import('@/views/article/ArticleChannel.vue')
        },
        {
          path: '/user/profile',
          component: () => import('@/views/user/UserProfile.vue')
        },
        {
          path: '/user/avtar',
          component: () => import('@/views/user/UserAvatar.vue')
        },
        {
          path: '/user/pwd',
          component: () => import('@/views/user/UserPwd.vue')
        }
      ]
    }
  ]
})

export default router
