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

const { t } = useI18n()

const transitionSelectorOptions = computed(() => {
  return [
    {
      label: t('setting.transition.none'),
      value: '',
    },
    {
      label: t('setting.transition.fadeSlide'),
      value: 'fade-slide',
    },
    {
      label: t('setting.transition.fadeBottom'),
      value: 'fade-bottom',
    },
    {
      label: t('setting.transition.fadeScale'),
      value: 'fade-scale',
    },
    {
      label: t('setting.transition.zoomFade'),
      value: 'zoom-fade',
    },
    {
      label: t('setting.transition.zoomOut'),
      value: 'zoom-out',
    },
    {
      label: t('setting.transition.fade'),
      value: 'fade',
    },
  ]
})
</script>

<template>
  <n-drawer v-model:show="settingStore.showSettingDrawer" :width="360" :mask-closable="false">
    <n-drawer-content :title="$t('setting.setting')" closable>
      <n-space vertical>
        <n-divider>{{ $t('setting.layout') }}</n-divider>
        <layout-select v-model:value="settingStore.layout" />
        <n-divider>{{ $t('setting.theme') }}</n-divider>
        <n-space justify="space-between">
          <span>{{ $t('setting.colorWeak') }}</span>
          <n-switch :value="settingStore.colorWeak" @update:value="settingStore.toggleColorWeak" />
        </n-space>
        <n-space justify="space-between">
          <span>{{ $t('setting.grayMode') }}</span>
          <n-switch :value="settingStore.grayMode" @update:value="settingStore.toggleGrayMode" />
        </n-space>
        <n-space justify="space-between">
          <span>{{ $t('setting.primaryColor') }}</span>
          <n-color-picker :value="settingStore.primaryColor" class="w-10em" :swatches="palette" @update:value="settingStore.changePrimaryColor" />
        </n-space>
        <n-space justify="space-between">
          <span>{{ $t('setting.transition.name') }}</span>
          <n-select v-model:value="settingStore.transition" class="w-10em" :options="transitionSelectorOptions" @update:value="settingStore.reloadPage" />
        </n-space>

        <n-divider>{{ $t('setting.interface') }}</n-divider>
        <n-space justify="space-between">
          <span>{{ $t('setting.showLogo') }}</span>
          <n-switch :value="settingStore.showLogo" @update:value="settingStore.toggleShowLogo" />
        </n-space>
        <n-space justify="space-between">
          <span>{{ $t('setting.showTabbar') }}</span>
          <n-switch :value="settingStore.showTabbar" @update:value="settingStore.toggleShowTabbar" />
        </n-space>
        <n-space justify="space-between">
          <span>{{ $t('setting.showFooter') }}</span>
          <n-switch :value="settingStore.showFooter" @update:value="settingStore.toggleShowFooter" />
        </n-space>
        <n-space justify="space-between">
          <span>{{ $t('setting.showBreadcrumb') }}</span>
          <n-switch :value="settingStore.showBreadcrumb" @update:value="settingStore.toggleShowBreadcrumb" />
        </n-space>
        <n-space justify="space-between">
          <span>{{ $t('setting.showBreadcrumbIcon') }}</span>
          <n-switch :value="settingStore.showBreadcrumbIcon" @update:value="settingStore.toggleShowBreadcrumbIcon" />
        </n-space>
      </n-space>
    </n-drawer-content>
  </n-drawer>
</template>
