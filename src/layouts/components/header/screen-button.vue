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

const { t } = useI18n()

const title = computed(() => {
  return store.isFullscreen ? t('setting.exitFullscreen') : t('setting.fullscreen')
})
</script>

<template>
  <n-tooltip align="bottom" trigger="hover">
    <template #trigger>
      <IconButton @click="handleToggleFullscreen">
        <div v-if="store.isFullscreen" class="i-icon-park-outline-off-screen" />
        <div v-else class="i-icon-park-outline-full-screen" />
      </IconButton>
    </template>
    <span>{{ title }}</span>
  </n-tooltip>
</template>


