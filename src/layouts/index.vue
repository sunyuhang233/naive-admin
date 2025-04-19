<script setup lang="ts">
import SettingDrawer from './components/header/setting-drawer.vue'
import LeftMenu from './components/left-menu.vue'
import TopMenu from './components/top-menu.vue'

const settingStore = useSettingStore()
const layout = {
  left: LeftMenu,
  top: TopMenu,
  mix: null,
}
</script>

<template>
  <component :is="layout[settingStore.layout]" />
  <SettingDrawer />
</template>
