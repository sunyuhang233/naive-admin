import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { LOGIN_PATH, NOT_FOUND_PATH } from '~/config'
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
    if (to.path === LOGIN_PATH) {
      next()
    }
    else if (to.path !== LOGIN_PATH) {
      const redirect = to.path === NOT_FOUND_PATH ? undefined : to.fullPath
      next({ path: LOGIN_PATH, query: { redirect } })
    }
    return false
  }
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
  if (to.path === LOGIN_PATH) {
    next({ path: '/' })
    return false
  }
  next()
})
router.beforeResolve((to, from, next) => {
  const menuStore = useMenuStore()
  const tabStore = useTabStore()
  tabStore.addTab(to)
  menuStore.setActiveMenu(to.fullPath)
  tabStore.setCurrentTabPath(to.fullPath)
  next()
})

router.afterEach((to) => {
  const title = import.meta.env.VITE_APP_TITLE
  document.title = to.meta.title ? `${to.meta.title} - ${title}` : title
})

export async function installRouter(app: App) {
  app.use(router)
  await router.isReady()
}

export default router
