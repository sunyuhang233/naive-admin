<script setup lang="ts">
const route = useRoute()
const menuStore = useMenuStore()
const router = useRouter()
const breadcrumbList = computed(() => {
  const breadcrumbData = menuStore.getBreadcrumbList[route.matched[route.matched.length - 1].path] ?? []
  return breadcrumbData
})
</script>

<template>
  <TransitionGroup name="list" tag="ul" style="display: flex; gap:1em;">
    <n-el v-for="(item, index) in breadcrumbList" :key="index" class="split flex gap-2 cursor-pointer items-center" tag="li" @click="router.push(item.path)">
      <icon :icon="item.meta.icon" />
      <span>{{ item.meta.title }}</span>
    </n-el>
  </TransitionGroup>
</template>


<style scoped lang="scss">
.split:not(:first-child)::before {
  content: '/';
  padding-right: 0.6em;
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.list-leave-active {
  position: absolute;
}
</style>
