import type { MenuOption as NMenuOption } from 'naive-ui'
import { DYNAMIC_ROUTES } from '~/router/constants'
import { getFlatArr, getParseMenuArr, renderMenus } from '~/utils/route'

export const useMenuStore = defineStore('menu', () => {
  const menuList = ref<MenuOption[]>([])
  const menus = ref<NMenuOption[]>([])
  const isInitAuthRoute = ref(false)
  const activeMenu = ref<string | null>(null)

  /**
   * 获取动态路由
   */
  const getDynamicRoutes = () => {
    isInitAuthRoute.value = false
    const routes = getParseMenuArr(DYNAMIC_ROUTES)
    menuList.value = routes
    menus.value = renderMenus(routes)
  }

  /**
   * 设置是否初始化权限路由
   */
  const setIsInitAuthRoute = (value: boolean) => {
    isInitAuthRoute.value = value
  }

  /**
   * 设置当前激活的菜单
   */
  const setActiveMenu = (menu: string) => {
    activeMenu.value = menu
  }

  /**
   * 获取扁平化路由
   */
  const getFlatMenuList = computed(() => getFlatArr(menuList.value))

  /**
   * 重置路由
   */
  const resetRouter = () => {
    activeMenu.value = null
  }


  return {
    menuList,
    getDynamicRoutes,
    getFlatMenuList,
    menus,
    isInitAuthRoute,
    setIsInitAuthRoute,
    activeMenu,
    setActiveMenu,
    resetRouter,
  }
})
