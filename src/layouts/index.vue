<script setup lang="ts">
import type { MenuOption } from 'naive-ui'
import { ref } from 'vue'
import collapseButton from './components/collapse-button.vue'
import screenButton from './components/screen-button.vue'


const menuOptions: MenuOption[] = Array.from({ length: 100 }).map((_, index) => ({
  label: `Option ${index + 1}`,
  key: `option-${index + 1}`,
  icon: () => null,
}))

const inverted = ref(false)

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
        <n-menu
          :inverted="inverted"
          :collapsed-width="64"
          :collapsed-icon-size="22"
          :options="menuOptions"
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
            <collapse-button />
          </div>
          <div class="flex items-center">
            <screen-button />
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
