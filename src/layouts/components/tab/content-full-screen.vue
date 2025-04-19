<script setup lang="ts">
const settingStore = useSettingStore()
</script>

<template>
  <n-tooltip placement="bottom" trigger="hover">
    <template #trigger>
      <IconButton @click="settingStore.toggleContentFullScreen">
        <div v-if="settingStore.contentFullScreen" class="i-icon-park-outline-off-screen-one" />
        <div v-else class="i-icon-park-outline-full-screen-one" />
      </IconButton>
    </template>
    <span>{{ $t('setting.fullscreen') }}</span>
  </n-tooltip>
</template>
