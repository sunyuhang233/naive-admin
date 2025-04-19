import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
import { local } from '~/utils/cache'
import enUS from '../../locales/enUS.json'
import zhCN from '../../locales/zhCN.json'

export const i18n = createI18n({
  locale: local.getItem('lang') as LangType,
  fallbackLocale: 'zhCN',
  legacy: false,
  fallbackWarn: false,
  messages: {
    zhCN,
    enUS,
  },
})

export function setupI18n(app: App) {
  app.use(i18n)
}
