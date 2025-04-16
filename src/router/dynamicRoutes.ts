import router from '.'

const modules = import.meta.glob('~/views/**/*.vue')

export async function initDynamicRoutes() {
  const authStore = useAuthStore()
  const menuStore = useMenuStore()
  const notification = useNotification()
  try {
    await menuStore.getDynamicRoutes()
    if (!menuStore.menuList.length) {
      notification.error({
        title: '无权限访问！',
        content: '当前账号没有任何权限，请联系管理员',
        duration: 3000,
      })
      authStore.clearUserInfo()
      router.replace('/login')
      return Promise.reject(new Error('当前账号没有任何权限，请联系管理员'))
    }

    const homeItem = {
      path: '/',
      redirect: menuStore.getFlatMenuList[0].path,
    }
    router.addRoute(homeItem)

    // 开始添加动态路由
    menuStore.getFlatMenuList.forEach((item: any) => {
      item.children && delete item.children
      if (item.component) {
        item.component = modules[`/src/views${item.component}`]
      }
      router.addRoute('layout', item)
    })
  }
  catch (error) {
    notification.error({
      title: '获取动态路由失败',
      content: '获取动态路由失败',
      duration: 3000,
    })
    authStore.clearUserInfo()
    router.replace('/login')
    return Promise.reject(error)
  }
}

