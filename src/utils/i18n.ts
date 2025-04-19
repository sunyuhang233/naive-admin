import { dateEnUS, dateZhCN, enUS, zhCN } from 'naive-ui'
import { i18n } from '../modules/i18n'

export function setLocale(local: LangType) {
  i18n.global.locale.value = local
}

export const $t = i18n.global.t

export const naiveI18nOptions = {
  zhCN: {
    locale: zhCN,
    dateLocale: dateZhCN,
  },
  enUS: {
    locale: enUS,
    dateLocale: dateEnUS,
  },
}


