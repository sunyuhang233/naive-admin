<script setup lang="ts">
const settingStore = useSettingStore()

const options = computed(() => {
  return [
    {
      label: '中文',
      value: 'zh-CN',
    },
    {
      label: '英文',
      value: 'en-US',
    },
  ]
})
</script>

<template>
  <n-popselect :value="settingStore.lang" :options="options" trigger="click" @update:value="settingStore.toggleLang">
    <IconButton>
      <div class="i-icon-park-outline-translate" />
    </IconButton>
  </n-popselect>
</template>

<style scoped></style>
