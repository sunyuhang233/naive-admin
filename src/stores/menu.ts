import router from '~/router'
import { createRoutes } from '~/utils/route'

export const useMenuStore = defineStore('menu', () => {
  const dynamicRoutes = ref<RowRoute[]>([])


  const getDynamicRoutes = () => {
    dynamicRoutes.value = [
      {
        name: 'dashboard',
        path: '/dashboard',
        title: '仪表盘',
        icon: 'i-icon-park-outline:analysis',
        menuType: 'dir',
        componentPath: null,
        id: 1,
        pid: null,
      },
      {
        name: 'workbench',
        path: '/dashboard/workbench',
        title: '工作台',
        icon: 'i-icon-park-outline:alarm',
        pinTab: true,
        menuType: 'page',
        componentPath: '/dashboard/workbench/index.vue',
        id: 2,
        pid: 1,
      },
      {
        name: 'monitor',
        path: '/dashboard/monitor',
        title: '监控页',
        icon: 'i-icon-park-outline:anchor',
        menuType: 'page',
        componentPath: '/dashboard/monitor/index.vue',
        id: 3,
        pid: 1,
      },
    ]
    const routes = createRoutes(dynamicRoutes.value)
    console.log(routes)
    router.addRoute(routes)
    // 获取所有的路由
    console.log(router.getRoutes(), 'all')
  }

  return {
    dynamicRoutes,
    getDynamicRoutes,
  }
})
