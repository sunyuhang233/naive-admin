<script setup lang="ts">
import breadcrumb from './header/breadcrumb.vue'
import collapseButton from './header/collapse-button.vue'
import darkMode from './header/dark-mode.vue'
import langMode from './header/lang-mode.vue'
import notice from './header/notice.vue'
import screenButton from './header/screen-button.vue'
import settingButton from './header/setting-button.vue'
import userCenter from './header/user-center.vue'
import Menu from './menu/index.vue'
import tabbar from './tab/tabbar.vue'

const settingStore = useSettingStore()
</script>

<template>
  <n-layout embedded has-sider class="h-full w-full">
    <n-layout-sider
      bordered
      collapse-mode="width"
      :collapsed-width="64"
      :width="240"
      :collapsed="settingStore.isCollapse"
      content-style="display: flex;flex-direction: column;min-height: 100%;"
    >
      <n-scrollbar>
        <Menu />
      </n-scrollbar>
    </n-layout-sider>
    <n-layout
      class="flex flex-col h-full"
      content-style="display: flex;flex-direction: column;min-height:100%;"
      embedded
      :native-scrollbar="false"
    >
      <n-layout-header bordered position="absolute" class="z-999">
        <div class="flex h-60px items-center justify-between">
          <div class="flex items-center">
            <collapseButton />
            <breadcrumb />
          </div>
          <div class="flex gap-1 items-center">
            <settingButton />
            <notice />
            <screenButton />
            <darkMode />
            <langMode />
            <userCenter />
          </div>
        </div>
        <div class="h-45px">
          <tabbar />
        </div>
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
  </n-layout>
</template>
