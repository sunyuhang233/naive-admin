import type { MenuOption as NMenuOption } from 'naive-ui'
import { Icon } from '@iconify/vue'
import { NIcon } from 'naive-ui'
import { RouterLink } from 'vue-router'
import { arrayToTree } from '.'
/**
 * 菜单转路由
 * @param menuList 菜单列表
 * @returns 路由列表
 */
export function getParseMenuArr(menuList: MenuList[]): MenuOption[] {
  const newMenuList: MenuOption[] = []
  for (let i = 0; i < menuList.length; i++) {
    const element = menuList[i]
    const menuItem: MenuOption = {
      id: element.id,
      pid: element.pid,
      path: element.path,
      name: element.name,
      component: element.component === '' ? undefined : element.component,
      redirect: element.children.length > 0 ? element.children[0].path : undefined,
      meta: {
        title: element.title,
        icon: element.icon,
        pinTab: element.pinTab,
        menuType: element.menuType,
        order: element.order ?? 0,
        href: element.href ?? undefined,
        activeMenu: element.activeMenu ?? undefined,
        keepAlive: element.keepAlive ?? undefined,
        hide: element.hide ?? false,
        withoutTab: element.withoutTab ?? undefined,
      },
      children: element.children.length > 0 ? getParseMenuArr(element.children) : undefined,
    }
    newMenuList.push(menuItem)
  }
  newMenuList.sort((a, b) => a.meta.order - b.meta.order)
  return newMenuList
}


/**
 * 菜单转扁平化路由
 * @param menuList 菜单列表
 * @returns 路由列表
 */
export function getFlatArr(menuList: MenuOption[]): MenuOption[] {
  const newMenuList: MenuOption[] = JSON.parse(JSON.stringify(menuList))
  return newMenuList.reduce((pre: MenuOption[], current: MenuOption) => {
    let flatArr = [...pre, current]
    if (current.children) {
      flatArr = [...flatArr, ...getFlatArr(current.children)]
    }
    return flatArr
  }, [])
}

/**
 * 渲染菜单
 * @param menuList 菜单列表
 * @returns 菜单列表
 */
export function renderMenus(menuList: MenuOption[]) {
  const menus: NMenuOption[] = []
  getFlatArr(menuList).forEach((item) => {
    const target: NMenuOption = {
      id: item.id,
      pid: item.pid,
      label:
        (!item.meta.menuType || item.meta.menuType === 'page')
          ? () =>
              h(
                RouterLink,
                {
                  to: {
                    path: item.path,
                  },
                },
                { default: () => item.meta.title },
              )
          : () => item.meta.title,
      key: item.path,
      icon: item.meta.icon ? renderIcon(item.meta.icon) : undefined,
    }
    menus.push(target)
  })
  return arrayToTree(menus)
}


export function renderIcon(icon?: string, props?: import('naive-ui').IconProps) {
  if (!icon) {
    return
  }

  return () => createIcon(icon, props)
}

export function createIcon(icon?: string, props?: import('naive-ui').IconProps) {
  if (!icon) {
    return
  }

  const isLocal = icon.startsWith('local:')
  let innerIcon: any
  if (isLocal) {
    // const svgName = icon.replace('local:', '')
    // const svg = import.meta.glob('@/assets/svg-icons/*.svg', {
    //   query: '?raw',
    //   import: 'default',
    //   eager: true,
    // })
    // const target = svg[`/src/assets/svg-icons/${svgName}.svg`]
    // innerIcon = h(NIcon, { ...props, innerHTML: target })
  }
  else {
    innerIcon = h(NIcon, props, {
      default: () => h(Icon, {
        icon,
      }),
    })
  }

  return innerIcon
}

/**
 * 获取所有面包屑
 * @param menuList 菜单列表
 * @returns 面包屑列表
 */
export function getAllBreadcrumbList(menuList: MenuOption[]) {
  const handleBreadcrumbList: { [key: string]: any } = {}
  const loop = (menuItem: MenuOption) => {
    if (menuItem?.children?.length) {
      menuItem.children.forEach(item => loop(item))
    }
    handleBreadcrumbList[menuItem.path] = getCurrentBreadcrumb(menuItem.path, menuList)
  }
  menuList.forEach(item => loop(item))
  return handleBreadcrumbList
}

/**
 * 获取当前面包屑
 * @param path 路径
 * @param menuList 菜单列表
 * @returns 面包屑列表
 */
export function getCurrentBreadcrumb(path: string, menuList: MenuOption[]) {
  const tempPath: MenuOption[] = []
  try {
    const getNodePath = (node: MenuOption) => {
      tempPath.push(node)
      if (node.path === path) {
        throw new Error('Find IT!')
      }
      if (node.children?.length) {
        node.children.forEach(item => getNodePath(item))
      }
      tempPath.pop()
    }
    menuList.forEach(item => getNodePath(item))
  }
  catch {
    return tempPath
  }
}
