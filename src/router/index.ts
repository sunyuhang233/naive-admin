import { createRouter, createWebHistory } from 'vue-router'
import { initDynamicRouter } from './dynamicRoutes'
import { staticRoutes } from './staticRoutes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: staticRoutes,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})


router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()
  const menuStore = useMenuStore()
  const isLogin = !!authStore.accessToken
  if (to.meta.href) {
    window.open(to.meta.href as string)
    return false
  }
  // 有 Token 就在当前页面，没有 Token 重置路由到登陆页
  if (!isLogin) {
    if (to.name === 'login') {
      next()
    }
    else if (to.name !== 'login') {
      const redirect = to.name === '404' ? undefined : to.fullPath
      next({ path: '/login', query: { redirect } })
    }
    return false
  }

  console.log('menuStore.isInitAuthRoute', menuStore.isInitAuthRoute)
  if (!menuStore.isInitAuthRoute) {
    console.log(to.name)
    await initDynamicRouter()
    if (to.name === '404') {
      next({
        path: to.fullPath,
        replace: true,
        query: to.query,
        hash: to.hash,
      })
      return false
    }
  }
  if (to.name === 'login') {
    next({ path: '/' })
    return false
  }
  next()
})
router.afterEach((to) => {
  document.title = `${to.meta.title} - Naive Admin`
})


export default router
