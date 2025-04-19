<script setup lang="ts">
import { NFlex } from 'naive-ui'

const settingStore = useSettingStore()
const { t } = useI18n()
const options = computed(() => {
  return [
    {
      label: t('setting.light'),
      value: 'light',
      icon: 'i-icon-park-outline-sun-one',
    },
    {
      label: t('setting.dark'),
      value: 'dark',
      icon: 'i-icon-park-outline-moon',
    },
    {
      label: t('setting.auto'),
      value: 'auto',
      icon: 'i-icon-park-outline-laptop-computer',
    },
  ]
})

function renderLabel(option: any) {
  return h(NFlex, { align: 'center' }, {

    default: () => [
      h('div', { class: option.icon }),
      option.label,
    ],
  })
}

const currentMode = computed(() => {
  return options.value.find(option => option.value === settingStore.mode)?.icon
})
</script>

<template>
  <n-popselect :value="settingStore.mode" :render-label="renderLabel" :options="options" trigger="click" @update:value="settingStore.toggleMode">
    <IconButton>
      <div :class="currentMode" />
    </IconButton>
  </n-popselect>
</template>

<style scoped></style>
