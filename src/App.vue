<script setup lang="ts">
import { darkTheme, dateEnUS, dateZhCN, enUS, lightTheme, zhCN } from 'naive-ui'

const settingStore = useSettingStore()
</script>

<template>
  <n-config-provider
    class="h-full w-full"
    :locale="settingStore.lang === 'zh-CN' ? zhCN : enUS"
    :date-locale="settingStore.lang === 'zh-CN' ? dateZhCN : dateEnUS"
    :theme="settingStore.mode === 'light' ? lightTheme : darkTheme"
  >
    <n-message-provider>
      <n-notification-provider>
        <RouterView />
      </n-notification-provider>
    </n-message-provider>
  </n-config-provider>
</template>
