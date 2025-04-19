import { colord } from 'colord'
import themeConfig from '~/config/theme.json'
import { local } from '~/utils/cache'
import { setLocale } from '~/utils/i18n'

export const useSettingStore = defineStore('setting', () => {
  const theme = ref(themeConfig)
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

  /**
   * 语言
   */
  const lang = ref<LangType>('zhCN')

  /**
   * 设置抽屉
   */
  const showSettingDrawer = ref(false)

  const colorWeak = ref(false)
  const grayMode = ref(false)
  const primaryColor = ref('#42b983')
  const transition = ref('')
  const loadFlag = ref(true)

  const layout = ref<LayoutType>('left')

  const toggleLayout = (layoutType: LayoutType) => {
    layout.value = layoutType
  }

  const toggleColorWeak = () => {
    document.body.classList.toggle('color-weak')
    colorWeak.value = document.body.classList.contains('color-weak')
  }

  const toggleGrayMode = () => {
    document.body.classList.toggle('gray-mode')
    grayMode.value = document.body.classList.contains('gray-mode')
  }

  const changePrimaryColor = (color: string) => {
    const lightTheme = colord(color).lighten(0.05).toHex()
    const darkTheme = colord(color).darken(0.05).toHex()
    theme.value.common.primaryColor = color
    theme.value.common.primaryColorHover = lightTheme
    theme.value.common.primaryColorPressed = darkTheme
    theme.value.common.primaryColorSuppl = lightTheme
  }

  const showLogo = ref(true)
  const toggleShowLogo = () => {
    showLogo.value = !showLogo.value
  }

  const showTabbar = ref(true)
  const toggleShowTabbar = () => {
    showTabbar.value = !showTabbar.value
  }

  const showFooter = ref(true)
  const toggleShowFooter = () => {
    showFooter.value = !showFooter.value
  }

  const showBreadcrumb = ref(true)
  const toggleShowBreadcrumb = () => {
    showBreadcrumb.value = !showBreadcrumb.value
  }

  const showBreadcrumbIcon = ref(true)
  const toggleShowBreadcrumbIcon = () => {
    showBreadcrumbIcon.value = !showBreadcrumbIcon.value
  }

  const reloadPage = async (delay = 600) => {
    loadFlag.value = false
    await nextTick()
    if (delay) {
      setTimeout(() => {
        loadFlag.value = true
      }, delay)
    }
    else {
      loadFlag.value = true
    }
  }

  const toggleShowSettingDrawer = () => {
    showSettingDrawer.value = !showSettingDrawer.value
  }

  const toggleLang = (langType: LangType) => {
    local.setItem('lang', langType)
    lang.value = langType
    setLocale(langType)
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

  const contentFullScreen = ref(false)
  const toggleContentFullScreen = () => {
    contentFullScreen.value = !contentFullScreen.value
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
    showSettingDrawer,
    toggleShowSettingDrawer,
    colorWeak,
    toggleColorWeak,
    grayMode,
    toggleGrayMode,
    changePrimaryColor,
    primaryColor,
    transition,
    theme,
    reloadPage,
    loadFlag,
    showLogo,
    toggleShowLogo,
    showTabbar,
    toggleShowTabbar,
    showFooter,
    toggleShowFooter,
    showBreadcrumb,
    toggleShowBreadcrumb,
    showBreadcrumbIcon,
    toggleShowBreadcrumbIcon,
    layout,
    toggleLayout,
    contentFullScreen,
    toggleContentFullScreen,
  }
}, {
  persist: true,
})
