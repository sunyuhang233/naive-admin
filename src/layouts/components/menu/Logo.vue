<script setup lang="ts">
import { HOME_PATH } from '~/config'

const name = import.meta.env.VITE_APP_TITLE
const router = useRouter()
const settingStore = useSettingStore()
</script>

<template>
  <div class="text-xl px-6 flex gap-2 h-60px cursor-pointer items-center" @click="router.push(HOME_PATH)">
    <img src="../../../assets/favicon.svg" alt="" class="size-36px">
    <span v-if="!settingStore.isCollapse" class="whitespace-nowrap text-ellipsis overflow-hidden">{{ name }}</span>
  </div>
</template>
