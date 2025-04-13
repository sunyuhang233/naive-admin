export const useSettingStore = defineStore('setting', () => {
  /**
   * 是否折叠
   */
  const isCollapse = ref(false)

  /**
   * 是否全屏
   */
  const isFullscreen = ref(false)

  /**
   * 模式
   */
  const mode = ref<'light' | 'dark' | 'system'>('light')

  const toggleMode = (modeType: 'light' | 'dark' | 'system') => {
    mode.value = modeType
  }

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
    mode,
    toggleMode,
  }
})
