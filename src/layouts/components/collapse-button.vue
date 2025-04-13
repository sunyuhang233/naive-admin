<script setup lang="ts">
const store = useSettingStore()
</script>

<template>
  <n-tooltip align="bottom" trigger="hover">
    <template #trigger>
      <IconButton @click="store.toggleCollapse">
        <div v-if="store.isCollapse" class="i-icon-park-outline-menu-fold-one" />
        <div v-else class="i-icon-park-outline-menu-unfold-one" />
      </IconButton>
    </template>
    <span>{{ store.isCollapse ? '展开' : '折叠' }}侧边栏</span>
  </n-tooltip>
</template>


