interface UserInfo {
  id: number
  username: string
  name: string
  avatar: string
  roles: string[]
  permissions: string[]
}


interface RouteMeta {
  /* 页面标题，通常必选。 */
  title: string
  /* 图标，一般配合菜单使用 */
  icon?: string
  /* 是否开启页面缓存 */
  keepAlive?: boolean
  /* 有些路由我们并不想在菜单中显示，比如某些编辑页面。 */
  hide?: boolean
  /* 菜单排序。 */
  order: number
  /* 嵌套外链  */
  href?: string
  /** 当前路由不在左侧菜单显示，但需要高亮某个菜单的情况 */
  activeMenu?: string
  /** 当前路由是否会被添加到Tab中 */
  withoutTab?: boolean
  /** 当前路由是否会被固定在Tab中,用于一些常驻页面 */
  pinTab?: boolean
  /** 当前路由在左侧菜单是目录还是页面,不设置默认为page */
  menuType?: 'dir' | 'page'
}

interface MenuList extends RouteMeta {
  /** 路由名称(路由唯一标识) */
  name: string
  /** 路由路径 */
  path: string
  /** 路由重定向 */
  redirect?: string
  /* 页面组件地址 */
  component?: string | (() => Promise<any>)
  /* 路由id */
  id: number
  /* 父级路由id，顶级页面为null */
  pid: number | null
  /* 子路由 */
  children: MenuList[]
}


interface MenuOption {
  path: string
  name: string
  component?: string | (() => Promise<any>)
  redirect?: string
  meta: RouteMeta
  children?: MenuOption[]
}
