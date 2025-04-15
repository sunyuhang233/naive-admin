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

  const lang = ref<'zh-CN' | 'en-US'>('zh-CN')

  const toggleLang = (langType: 'zh-CN' | 'en-US') => {
    lang.value = langType
  }

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
    lang,
    toggleLang,
  }
}, {
  persist: true,
})
