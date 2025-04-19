<script lang="ts" setup>
import layoutSelect from './layout-select.vue'

const palette = [
  '#ffb8b8',
  '#d03050',
  '#F0A020',
  '#fff200',
  '#ffda79',
  '#18A058',
  '#006266',
  '#22a6b3',
  '#18dcff',
  '#2080F0',
  '#c56cf0',
  '#be2edd',
  '#706fd3',
  '#4834d4',
  '#130f40',
  '#4b4b4b',
]
const settingStore = useSettingStore()

const transitionSelectorOptions = computed(() => {
  return [
    {
      label: '无过渡',
      value: '',
    },
    {
      label: '淡入淡出',
      value: 'fade-slide',
    },
    {
      label: '底部淡出',
      value: 'fade-bottom',
    },
    {
      label: '收缩淡出',
      value: 'fade-scale',
    },
    {
      label: '扩大淡出',
      value: 'zoom-fade',
    },
    {
      label: '收缩',
      value: 'zoom-out',
    },
    {
      label: '柔和',
      value: 'fade',
    },
  ]
})
</script>

<template>
  <n-drawer v-model:show="settingStore.showSettingDrawer" :width="360" :mask-closable="false">
    <n-drawer-content title="系统设置" closable>
      <n-space vertical>
        <n-divider>布局设置</n-divider>
        <layout-select v-model:value="settingStore.layout" />
        <n-divider>主题设置</n-divider>
        <n-space justify="space-between">
          <span>色弱模式</span>
          <n-switch :value="settingStore.colorWeak" @update:value="settingStore.toggleColorWeak" />
        </n-space>
        <n-space justify="space-between">
          <span>黑白模式</span>
          <n-switch :value="settingStore.grayMode" @update:value="settingStore.toggleGrayMode" />
        </n-space>
        <n-space justify="space-between">
          <span>主题色</span>
          <n-color-picker :value="settingStore.primaryColor" class="w-10em" :swatches="palette" @update:value="settingStore.changePrimaryColor" />
        </n-space>
        <n-space justify="space-between">
          <span>页面过渡</span>
          <n-select v-model:value="settingStore.transition" class="w-10em" :options="transitionSelectorOptions" @update:value="settingStore.reloadPage" />
        </n-space>

        <n-divider>界面显示</n-divider>
        <n-space justify="space-between">
          <span>LOGO显示</span>
          <n-switch :value="settingStore.showLogo" @update:value="settingStore.toggleShowLogo" />
        </n-space>
        <n-space justify="space-between">
          <span>标签栏显示</span>
          <n-switch :value="settingStore.showTabbar" @update:value="settingStore.toggleShowTabbar" />
        </n-space>
        <n-space justify="space-between">
          <span>底部版权</span>
          <n-switch :value="settingStore.showFooter" @update:value="settingStore.toggleShowFooter" />
        </n-space>
        <n-space justify="space-between">
          <span>面包屑</span>
          <n-switch :value="settingStore.showBreadcrumb" @update:value="settingStore.toggleShowBreadcrumb" />
        </n-space>
        <n-space justify="space-between">
          <span>面包屑图标</span>
          <n-switch :value="settingStore.showBreadcrumbIcon" @update:value="settingStore.toggleShowBreadcrumbIcon" />
        </n-space>
      </n-space>
    </n-drawer-content>
  </n-drawer>
</template>
