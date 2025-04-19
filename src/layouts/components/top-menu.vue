<script setup lang="ts">
import DarkMode from './header/dark-mode.vue'
import LangMode from './header/lang-mode.vue'
import Notice from './header/notice.vue'
import ScreenButton from './header/screen-button.vue'
import SettingButton from './header/setting-button.vue'
import UserCenter from './header/user-center.vue'
import Menu from './menu/index.vue'
import Logo from './menu/Logo.vue'
import Tabbar from './tab/tabbar.vue'

const settingStore = useSettingStore()
</script>

<template>
  <n-layout class="flex flex-col h-100dvh w-full" embedded :native-scrollbar="false">
    <n-layout-header bordered position="absolute" class="z-999">
      <div class="flex shrink-0 h-60px items-center justify-between">
        <Logo v-if="settingStore.showLogo" />
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
      <Tabbar v-if="settingStore.showTabbar" />
    </n-layout-header>
    <div
      :class="{
        'p-t-121px': settingStore.showTabbar,
        'p-b-56px': settingStore.showFooter,
        'p-t-76px': !settingStore.showTabbar,
      }"
      class="p-16px flex flex-1 flex-col"
    >
      <RouterView v-slot="{ Component, route }" class="flex-1">
        <transition :name="settingStore.transition" mode="out-in">
          <KeepAlive :max="10">
            <component :is="Component" v-if="settingStore.loadFlag" :key="route.fullPath" />
          </KeepAlive>
        </transition>
      </RouterView>
    </div>
    <n-layout-footer
      v-if="settingStore.showFooter"
      bordered
      position="absolute"
      class="flex h-40px items-center justify-center"
    >
      Copyright © 2025
    </n-layout-footer>
  </n-layout>
</template>
