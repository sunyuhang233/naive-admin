import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/index.vue'),
    },
    {
      path: '/404',
      name: '404',
      component: () => import('../views/not-found.vue'),
    },
    {
      path: '/:pathMatch(.*)',
      redirect: {
        path: '/404',
        replace: true,
      },
    },
  ],
})

export default router
