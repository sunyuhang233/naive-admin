<script setup lang="ts">
import router from '~/router'
import { renderIcon } from '~/utils/route'

const tabStore = useTabStore()

function renderDropTabsLabel(option: any) {
  return option.meta.title
}
function renderDropTabsIcon(option: any) {
  return renderIcon(option.meta.icon)!()
}
function handleDropTabs(key: string, option: any) {
  router.push(option.path)
}
</script>

<template>
  <n-dropdown
    :options="tabStore.tabs"
    :render-label="renderDropTabsLabel"
    :render-icon="renderDropTabsIcon"
    trigger="click"
    size="small"
    @select="handleDropTabs"
  >
    <IconButton>
      <div class="i-icon-park-outline-application-menu" />
    </IconButton>
  </n-dropdown>
</template>
