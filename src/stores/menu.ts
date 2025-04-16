import { DYNAMIC_ROUTES } from '~/router/constants'
import { getFlatArr, getParseMenuArr } from '~/utils/route'

export const useMenuStore = defineStore('menu', () => {
  const menuList = ref<MenuOption[]>([])


  /**
   * 获取动态路由
   */
  const getDynamicRoutes = () => {
    const routes = getParseMenuArr(DYNAMIC_ROUTES)
    menuList.value = routes
  }

  const getFlatMenuList = computed(() => getFlatArr(menuList.value))

  return {
    menuList,
    getDynamicRoutes,
    getFlatMenuList,
  }
})
