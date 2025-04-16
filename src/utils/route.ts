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
