<script setup lang="ts">
import type { RouteLocationNormalized } from 'vue-router'
import { useDraggable } from 'vue-draggable-plus'
import ContentFullScreen from './content-full-screen.vue'
import DropTabs from './drop-tabs.vue'
import Reload from './reload.vue'
import TabbarItem from './tabbar-item.vue'

const router = useRouter()
const tabStore = useTabStore()
const showDropdown = ref(false)
const x = ref(0)
const y = ref(0)

const options = computed(() => {
  return [
    {
      label: '刷新',
      key: 'reload',
      icon: () => h('div', { class: 'i-icon-park-outline-refresh' }),
    },
    {
      label: '关闭',
      key: 'closeCurrent',
      icon: () => h('div', { class: 'i-icon-park-outline-close' }),
    },
    {
      label: '关闭其他',
      key: 'closeOther',
      icon: () => h('div', { class: 'i-icon-park-outline-delete-four' }),
    },
    {
      label: '关闭左侧',
      key: 'closeLeft',
      icon: () => h('div', { class: 'i-icon-park-outline-to-left' }),
    },
    {
      label: '关闭右侧',
      key: 'closeRight',
      icon: () => h('div', { class: 'i-icon-park-outline-to-right' }),
    },
    {
      label: '关闭所有',
      key: 'closeAll',
      icon: () => h('div', { class: 'i-icon-park-outline-fullwidth' }),
    },
  ]
})

const handleTab = (tab: RouteLocationNormalized) => {
  router.push(tab.fullPath)
}

const onClickoutside = () => {
  showDropdown.value = false
}
const currentRoute = ref<string>('')

const handleSelect = (key: string) => {
  switch (key) {
    case 'reload':
      router.go(0)
      break
    case 'closeCurrent':
      tabStore.closeTab(currentRoute.value)
      break
    case 'closeOther':
      tabStore.closeOther(currentRoute.value)
      break
    case 'closeLeft':
      tabStore.closeLeft(currentRoute.value)
      break
    case 'closeRight':
      tabStore.closeRight(currentRoute.value)
      break
    case 'closeAll':
      tabStore.closeAll()
      break
  }
  showDropdown.value = false
}

const handleContextMenu = (e: MouseEvent, tab: RouteLocationNormalized) => {
  e.preventDefault()
  currentRoute.value = tab.fullPath
  showDropdown.value = false
  nextTick().then(() => {
    showDropdown.value = true
    x.value = e.clientX
    y.value = e.clientY
  })
}

const el = ref()
const { tabs } = storeToRefs(tabStore)
useDraggable(el, tabs, {
  animation: 150,
  ghostClass: 'ghost',
})
</script>

<template>
  <div class="pl-2 flex w-full relative">
    <div ref="el" class="flex flex-1 items-end">
      <TabbarItem
        v-for="item in tabStore.tabs" :key="item.path"
        :value="tabStore.currentTabPath" :route="item"
        :closable="tabStore.tabs.length > 1"
        @close="tabStore.closeTab"
        @click="handleTab(item)"
        @contextmenu="tabStore.tabs.length > 1 && handleContextMenu($event, item)"
      />
      <n-dropdown
        placement="bottom-start" trigger="manual" :x="x" :y="y" :options="options" :show="showDropdown"
        :on-clickoutside="onClickoutside" @select="handleSelect"
      />
    </div>
    <n-el class="bg-[var(--base-color)] flex gap-1 h-full items-center right-0 absolute">
      <Reload />
      <ContentFullScreen />
      <DropTabs />
    </n-el>
  </div>
</template>

<style>
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>
