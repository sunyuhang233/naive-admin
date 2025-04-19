<script setup lang="ts">
const contentFullScreen = ref(false)
</script>

<template>
  <n-tooltip placement="bottom" trigger="hover">
    <template #trigger>
      <IconButton @click="contentFullScreen = !contentFullScreen">
        <div v-if="contentFullScreen" class="i-icon-park-outline-off-screen-one" />
        <div v-else class="i-icon-park-outline-full-screen-one" />
      </IconButton>
    </template>
    <span>切换内容全屏</span>
  </n-tooltip>
</template>
