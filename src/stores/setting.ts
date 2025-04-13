export const useSettingStore = defineStore('setting', () => {
  /**
   * 是否折叠
   */
  const isCollapse = ref(false)

  const isFullscreen = ref(false)

  const toggleCollapse = () => {
    isCollapse.value = !isCollapse.value
  }

  const toggleFullscreen = () => {
    isFullscreen.value = !isFullscreen.value
  }

  return {
    isCollapse,
    toggleCollapse,
    isFullscreen,
    toggleFullscreen,
  }
})
