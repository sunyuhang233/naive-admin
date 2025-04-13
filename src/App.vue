<script setup lang="ts">
import { darkTheme, lightTheme } from 'naive-ui'

const settingStore = useSettingStore()
</script>

<template>
  <n-config-provider class="h-full w-full" :theme="settingStore.mode === 'light' ? lightTheme : darkTheme">
    <n-message-provider>
      <n-notification-provider>
        <RouterView />
      </n-notification-provider>
    </n-message-provider>
  </n-config-provider>
</template>
