<script setup lang="ts">
const settingStore = useSettingStore()
</script>

<template>
  <n-tooltip align="bottom" trigger="hover">
    <template #trigger>
      <IconButton @click="settingStore.toggleShowSettingDrawer">
        <div class="i-icon-park-outline-setting-two" />
      </IconButton>
    </template>
    <span>设置</span>
  </n-tooltip>
</template>

