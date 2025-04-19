<script setup lang="ts">
import { NFlex } from 'naive-ui'

const settingStore = useSettingStore()

const options = computed(() => {
  return [
    {
      label: '亮色',
      value: 'light',
      icon: 'i-icon-park-outline-sun-one',
    },
    {
      label: '暗色',
      value: 'dark',
      icon: 'i-icon-park-outline-moon',
    },
    {
      label: '跟随系统',
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
