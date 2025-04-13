<script setup lang="ts">
const store = useSettingStore()

/**
 * 点击切换全屏
 */
const handleToggleFullscreen = () => {
  store.toggleFullscreen()
  if (document.documentElement.requestFullscreen && store.isFullscreen) {
    document.documentElement.requestFullscreen()
  }
  else if (document.exitFullscreen && !store.isFullscreen) {
    document.exitFullscreen()
  }
}
</script>

<template>
  <n-tooltip align="bottom" trigger="hover">
    <template #trigger>
      <IconButton @click="handleToggleFullscreen">
        <div v-if="store.isFullscreen" class="i-icon-park-outline-off-screen" />
        <div v-else class="i-icon-park-outline-full-screen" />
      </IconButton>
    </template>
    <span>{{ store.isFullscreen ? '退出' : '全屏' }}模式</span>
  </n-tooltip>
</template>


