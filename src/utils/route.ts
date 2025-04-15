import type { RouteRecordRaw } from 'vue-router'
import Layout from '~/layouts/index.vue'

export function createRoutes(menus: RowRoute[]) {
  const modules = import.meta.glob('~/views/**/*.vue')
  // 转换格式
  const routes = convertRoutes(menus)
  // 拼接组件路径
  routes.forEach((route) => {
    if (route.componentPath && !route.redirect) {
      route.component = modules[`/src/views${route.componentPath}`]
    }
  })
  // 转为树形结构
  const tree = arrayToTree(routes)
  // 放到根路径中
  const root: RouteRecordRaw = {
    path: '/',
    name: 'homeLayout',
    redirect: '/dashboard/workbench',
    component: Layout,
    meta: {
      title: '',
      icon: 'i-icon-park-outline:home',
    },
    children: [],
  }
  root.children = tree as unknown as RouteRecordRaw[]
  return root
}

function convertRoutes(menus: RowRoute[]): Route[] {
  const res: Route[] = []
  menus.forEach((item) => {
    const route = {
      name: item.name,
      path: item.path,
      redirect: item.redirect,
      componentPath: item.componentPath,
      id: item.id,
      pid: item.pid,
      meta: {
        title: item.title,
        icon: item.icon,
        keepAlive: item.keepAlive,
        hide: item.hide,
        order: item.order,
        href: item.href,
        activeMenu: item.activeMenu,
        withoutTab: item.withoutTab,
        pinTab: item.pinTab,
        menuType: item.menuType,
      },
    } as Route
    res.push(route)
  })
  return res
}

export function arrayToTree(arr: any[]) {
  // 初始化结果数组
  const res: any = []
  // 使用Map存储数组元素，以id为键，元素本身为值
  const map = new Map()

  // 遍历数组，将每个元素以id为键存储到Map中
  arr.forEach((item) => {
    map.set(item.id, item)
  })

  // 再次遍历数组，根据pid将元素组织成树形结构
  arr.forEach((item) => {
    // 获取当前元素的父级元素
    const parent = item.pid && map.get(item.pid)
    // 如果有父级元素
    if (parent) {
      // 如果父级元素已有子元素，则将当前元素追加到子元素数组中
      if (parent?.children) {
        parent.children.push(item)
      }
      // 如果父级元素没有子元素，则创建子元素数组，并将当前元素作为第一个元素
      else { parent.children = [item] }
    }
    // 如果没有父级元素，则将当前元素直接添加到结果数组中
    else {
      res.push(item)
    }
  })
  // 返回组织好的树形结构数组
  return res
}
