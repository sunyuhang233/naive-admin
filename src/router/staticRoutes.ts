export const staticRoutes = [
  {
    path: '/',
    name: 'homeLayout',
    component: () => import('~/layouts/index.vue'),
    redirect: 'home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('~/views/index.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('~/views/login/index.vue'),
  },
  {
    path: '/404',
    name: '404',
    component: () => import('~/views/not-found.vue'),
  },
  {
    path: '/:pathMatch(.*)',
    redirect: {
      path: '/404',
      replace: true,
    },
  },
]
