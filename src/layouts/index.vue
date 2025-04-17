<script setup lang="ts">
import { ref } from 'vue'
import collapseButton from './components/collapse-button.vue'
import darkMode from './components/dark-mode.vue'
import langMode from './components/lang-mode.vue'
import notice from './components/notice.vue'
import screenButton from './components/screen-button.vue'
import settingButton from './components/setting-button.vue'
import userCenter from './components/user-center.vue'


const inverted = ref(false)

const settingStore = useSettingStore()
const menuStore = useMenuStore()
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
        <n-menu
          :inverted="inverted"
          :collapsed-width="64"
          :collapsed-icon-size="22"
          :options="menuStore.menus"
        />
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
      </n-layout-header>
      <div class="p-b-40px p-t-60px flex flex-1 flex-col">
        <RouterView class="p-16px flex-1" />
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
