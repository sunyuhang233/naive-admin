import { createRouter, createWebHistory } from 'vue-router'
import { initDynamicRouter } from './dynamicRoutes'
import { staticRoutes } from './staticRoutes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: staticRoutes,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})


const whiteList = ['/login']

function resetRouter() {
  const menuStore = useMenuStore()
  menuStore.getFlatMenuList.forEach((item) => {
    const { name } = item
    if (name && router.hasRoute(name)) {
      router.removeRoute(name)
    }
  })
}


router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()
  const menuStore = useMenuStore()
  // 有 Token 就在当前页面，没有 Token 重置路由到登陆页
  if (!authStore.accessToken) {
    if (whiteList.includes(to.path)) {
      next()
      return
    }
    else {
      next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
      return
    }
  }

  // 3.判断是访问登陆页
  if (to.path === '/login') {
    resetRouter()
    next(from.fullPath)
  }
  else {
    if (!menuStore.menuList.length) {
      await initDynamicRouter()
      return next({ ...to, replace: true })
    }
    next()
  }
})
router.afterEach((to) => {
  document.title = `${to.meta.title} - Naive Admin`
})


export default router
