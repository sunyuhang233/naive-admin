import type { Router } from 'vue-router'
import { LOGIN_PATH, WHITE_PATH } from '~/config'
import router from '.'
import { initDynamicRouter } from './dynamicRoutes'

function resetRouter() {
  const menuStore = useMenuStore()
  menuStore.getFlatMenuList.forEach((item) => {
    const { name } = item
    if (name && router.hasRoute(name)) {
      router.removeRoute(name)
    }
  })
}


export function createRouterGuard(router: Router) {
  const authStore = useAuthStore()
  const menuStore = useMenuStore()
  router.beforeEach(async (to, from, next) => {
    document.title = to.meta.title ? `${to.meta.title} - Naive Admin` : 'Naive Admin'
    // 有 Token 就在当前页面，没有 Token 重置路由到登陆页
    if (!authStore.accessToken) {
      if (WHITE_PATH.includes(to.path)) {
        next()
        return
      }
      else {
        next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
        return
      }
    }
    // 3.判断是访问登陆页
    if (to.path === LOGIN_PATH) {
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
}
