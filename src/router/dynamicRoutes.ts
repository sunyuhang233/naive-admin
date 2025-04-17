import router from '.'

const modules = import.meta.glob('~/views/**/*.vue')

export const initDynamicRouter = async () => {
  const authStore = useAuthStore()
  const menuStore = useMenuStore()

  try {
    // 1.获取菜单列表 && 按钮权限
    menuStore.getDynamicRoutes()

    // 2.判断当前用户有没有菜单权限
    if (!menuStore.menuList.length) {
      console.error('No menu permissions')
      authStore.accessToken = null
      router.replace('/login')
      return Promise.reject(new Error('No permission'))
    }

    const homeItem = {
      path: '/',
      redirect: menuStore.getFlatMenuList[0].path,
    }
    router.addRoute(homeItem)
    // 5.添加动态路由
    menuStore.getFlatMenuList.forEach((item: any) => {
      item.children && delete item.children
      if (item.component && typeof item.component === 'string') {
        item.component = modules[`/src/views${item.component}`]
      }
      router.addRoute('layout', item)
    })
    menuStore.setIsInitAuthRoute(true)
  }
  catch (error) {
    console.error('Failed to initialize dynamic routes:', error)
    authStore.accessToken = null
    router.replace('/login')
    return Promise.reject(error)
  }
}
