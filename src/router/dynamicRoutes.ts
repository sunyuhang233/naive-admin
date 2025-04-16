import router from '.'

const modules = import.meta.glob('~/views/**/*.vue')

export const initDynamicRouter = async () => {
  const authStore = useAuthStore()
  const menuStore = useMenuStore()

  try {
    // 1.获取菜单列表 && 按钮权限
    await menuStore.getDynamicRoutes()

    // 2.判断当前用户有没有菜单权限
    if (!menuStore.menuList.length) {
      console.error('No menu permissions')
      authStore.clearUserInfo()
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
      // 创建副本避免修改原始对象
      const routeItem = { ...item }

      // 移除children避免嵌套问题
      if (routeItem.children) {
        delete routeItem.children
      }

      // 加载组件
      if (routeItem.component) {
        routeItem.component = modules[`/src/views${routeItem.component}`]
      }

      // 添加路由
      if (routeItem.name) {
        router.addRoute('layout', routeItem)
      }
    })

    return menuStore.menuList
  }
  catch (error) {
    console.error('Failed to initialize dynamic routes:', error)
    authStore.clearUserInfo()
    router.replace('/login')
    return Promise.reject(error)
  }
}
