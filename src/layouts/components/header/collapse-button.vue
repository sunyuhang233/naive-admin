<script setup lang="ts">
const store = useSettingStore()
const { t } = useI18n()
const tittle = computed(() => store.isCollapse ? t('setting.expand') : t('setting.collapse'))
</script>

<template>
  <n-tooltip align="bottom" trigger="hover">
    <template #trigger>
      <IconButton @click="store.toggleCollapse">
        <div v-if="store.isCollapse" class="i-icon-park-outline-menu-fold-one" />
        <div v-else class="i-icon-park-outline-menu-unfold-one" />
      </IconButton>
    </template>
    <span>{{ tittle }}</span>
  </n-tooltip>
</template>
