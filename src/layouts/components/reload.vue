<script setup lang="ts">
const loading = ref(false)
const handleReload = () => {
  loading.value = true
  nextTick(() => {
    loading.value = false
  })
}
</script>


<template>
  <n-tooltip placement="bottom" trigger="hover">
    <template #trigger>
      <IconButton @click="handleReload">
        <div class="i-icon-park-outline-refresh" :class="{ 'animate-spin': loading }" />
      </IconButton>
    </template>
    <span>刷新</span>
  </n-tooltip>
</template>
