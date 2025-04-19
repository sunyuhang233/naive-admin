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
    <span>{{ $t('setting.setting') }}</span>
  </n-tooltip>
</template>

