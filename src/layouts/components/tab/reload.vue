<script setup lang="ts">
const settingStore = useSettingStore()

const loading = ref(false)

function handleReload() {
  loading.value = true
  settingStore.reloadPage()
  setTimeout(() => {
    loading.value = false
  }, 800)
}
</script>


<template>
  <n-tooltip placement="bottom" trigger="hover">
    <template #trigger>
      <IconButton @click="handleReload">
        <div class="i-icon-park-outline-refresh" :class="{ 'animate-spin': loading }" />
      </IconButton>
    </template>
    <span>{{ $t('common.reload') }}</span>
  </n-tooltip>
</template>
