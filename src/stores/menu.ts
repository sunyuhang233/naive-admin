import type { MenuOption as NMenuOption } from 'naive-ui'
import { DYNAMIC_ROUTES } from '~/router/constants'
import { getFlatArr, getParseMenuArr, renderMenus } from '~/utils/route'

export const useMenuStore = defineStore('menu', () => {
  const menuList = ref<MenuOption[]>([])
  const menus = ref<NMenuOption[]>([])
  const isInitAuthRoute = ref(false)

  /**
   * 获取动态路由
   */
  const getDynamicRoutes = () => {
    isInitAuthRoute.value = false
    const routes = getParseMenuArr(DYNAMIC_ROUTES)
    menuList.value = routes
    menus.value = renderMenus(routes)
  }

  const setIsInitAuthRoute = (value: boolean) => {
    isInitAuthRoute.value = value
  }

  const getFlatMenuList = computed(() => getFlatArr(menuList.value))

  return {
    menuList,
    getDynamicRoutes,
    getFlatMenuList,
    menus,
    isInitAuthRoute,
    setIsInitAuthRoute,
  }
})
