<script setup lang="ts">
const inverted = ref(false)

const menuStore = useMenuStore()
</script>

<template>
  <n-menu
    :inverted="inverted"
    :collapsed-width="64"
    :collapsed-icon-size="22"
    :options="menuStore.menus"
    :value="menuStore.activeMenu"
  />
</template>
