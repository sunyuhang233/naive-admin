import type { RouteLocationNormalized } from 'vue-router'
import { HOME_PATH, WHITE_TAB_PATH } from '~/config'
import router from '~/router'

export const useTabStore = defineStore('tab', () => {
  const tabs = ref<RouteLocationNormalized[]>([])
  const currentTabPath = ref<string>('')

  const setCurrentTabPath = (path: string) => {
    currentTabPath.value = path
  }

  const hasExistsTab = (tab: RouteLocationNormalized) => {
    return tabs.value.some(item => item.path === tab.path)
  }

  const addTab = (tab: RouteLocationNormalized) => {
    if (!WHITE_TAB_PATH.includes(tab.path)) {
      if (!hasExistsTab(tab)) {
        tabs.value.push(tab)
      }
    }
  }

  const closeTab = (path: string) => {
    const _length = tabs.value.length
    console.log(_length)
    if (_length > 1) {
      // 当前索引
      const index = tabs.value.findIndex(item => item.path === path)
      // 是否是最后一个
      const isLast = index === _length - 1
      // 如果是关闭的当前页面 路由跳转到原先的后一个标签
      if (currentTabPath.value === path && !isLast) {
        router.push(tabs.value[index + 1].fullPath)
      }
      else if (currentTabPath.value === path && isLast) {
        // 如果是关闭的当前页面 路由跳转到原先的前一个标签
        router.push(tabs.value[index - 1].fullPath)
      }
      tabs.value = tabs.value.filter(item => item.path !== path)
      if (_length - 1 === 0) {
        router.push(HOME_PATH)
      }
    }
  }

  const closeOther = (path: string) => {
    const index = tabs.value.findIndex(item => item.path === path)
    if (index !== -1) {
      tabs.value = tabs.value.filter(item => item.path === path)
    }
  }

  const closeLeft = (path: string) => {
    const index = tabs.value.findIndex(item => item.path === path)
    if (index !== -1) {
      tabs.value = tabs.value.filter((item, i) => i >= index)
    }
  }

  const closeRight = (path: string) => {
    const index = tabs.value.findIndex(item => item.path === path)
    if (index !== -1) {
      tabs.value = tabs.value.filter((item, i) => i <= index)
    }
  }
  const closeAll = () => {
    // 只保留index为0的标签页，其他标签页清空
    tabs.value = tabs.value.filter((item, i) => i === 0)
    currentTabPath.value = tabs.value[0].fullPath
  }
  return {
    tabs,
    addTab,
    currentTabPath,
    setCurrentTabPath,
    closeTab,
    closeOther,
    closeLeft,
    closeRight,
    closeAll,
  }
}, {
  persist: true,
})
