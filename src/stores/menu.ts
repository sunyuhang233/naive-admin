import type { MenuOption as NMenuOption } from 'naive-ui'
import { DYNAMIC_ROUTES } from '~/router/constants'
import { getFlatArr, getParseMenuArr, renderMenus } from '~/utils/route'

export const useMenuStore = defineStore('menu', () => {
  const menuList = ref<MenuOption[]>([])
  const menus = ref<NMenuOption[]>([])

  /**
   * 获取动态路由
   */
  const getDynamicRoutes = () => {
    const routes = getParseMenuArr(DYNAMIC_ROUTES)
    menuList.value = routes
    menus.value = renderMenus(routes)
  }

  const getFlatMenuList = computed(() => getFlatArr(menuList.value))

  return {
    menuList,
    getDynamicRoutes,
    getFlatMenuList,
    menus,
  }
}, {
  persist: true,
})
