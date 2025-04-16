export const staticRoutes = [
  {
    path: '/layout',
    name: 'layout',
    component: () => import('~/layouts/index.vue'),
    children: [],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('~/views/login/index.vue'),
    meta: {
      title: '登录',
    },
  },
  {
    path: '/404',
    name: '404',
    component: () => import('~/views/not-found.vue'),
    meta: {
      title: '404',
    },
  },
  {
    path: '/:pathMatch(.*)',
    redirect: {
      path: '/404',
      replace: true,
    },
  },
]
