<script setup lang="ts">
const settingStore = useSettingStore()

const { t } = useI18n()
const options = computed(() => {
  return [
    {
      label: t('setting.zh'),
      value: 'zhCN',
    },
    {
      label: t('setting.en'),
      value: 'enUS',
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
