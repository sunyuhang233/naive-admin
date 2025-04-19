<script setup lang="ts">
import { darkTheme, lightTheme } from 'naive-ui'
import { naiveI18nOptions } from './utils/i18n'

const settingStore = useSettingStore()

const naiveLocale = computed(() => {
  return naiveI18nOptions[settingStore.lang] ? naiveI18nOptions[settingStore.lang] : naiveI18nOptions.enUS
})
</script>

<template>
  <n-config-provider
    class="h-full w-full"
    :locale="naiveLocale.locale"
    :date-locale="naiveLocale.dateLocale"
    :theme="settingStore.mode === 'light' ? lightTheme : darkTheme"
    :theme-overrides="settingStore.theme"
  >
    <n-dialog-provider>
      <n-message-provider>
        <n-notification-provider>
          <RouterView />
        </n-notification-provider>
      </n-message-provider>
    </n-dialog-provider>
  </n-config-provider>
</template>
