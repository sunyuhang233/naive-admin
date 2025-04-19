<script setup lang="ts">
import DarkMode from './header/dark-mode.vue'
import LangMode from './header/lang-mode.vue'
import Notice from './header/notice.vue'
import ScreenButton from './header/screen-button.vue'
import SettingButton from './header/setting-button.vue'
import UserCenter from './header/user-center.vue'
import Menu from './menu/index.vue'
import Tabbar from './tab/tabbar.vue'
</script>

<template>
  <n-layout class="flex flex-col h-100dvh w-full" embedded :native-scrollbar="false">
    <n-layout-header bordered position="absolute" class="z-9999">
      <div class="flex shrink-0 h-60px items-center justify-between">
        <Menu mode="horizontal" responsive />
        <div class="flex gap-1 items-center">
          <Notice />
          <ScreenButton />
          <DarkMode />
          <LangMode />
          <SettingButton />
          <UserCenter />
        </div>
      </div>
      <Tabbar />
    </n-layout-header>
    <div class="p-16px p-b-56px p-t-121px flex flex-1 flex-col">
      <RouterView />
    </div>
    <n-layout-footer
      bordered
      position="absolute"
      class="flex h-40px items-center justify-center"
    >
      Copyright © 2025
    </n-layout-footer>
  </n-layout>
</template>
