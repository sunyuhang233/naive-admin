<script lang="ts" setup>
import type { DropdownOption } from 'naive-ui'
import { useDialog, useNotification } from 'naive-ui'

const authStore = useAuthStore()
const router = useRouter()
const route = useRoute()
const menuStore = useMenuStore()
const notification = useNotification()
const dialog = useDialog()

const handleSelect = (key: string) => {
  if (key === 'logout') {
    dialog.info({
      title: '提示',
      content: '确定要退出当前账号吗?',
      positiveText: '确定',
      negativeText: '取消',
      maskClosable: false,
      onPositiveClick: () => {
        notification.success({
          title: '退出登录!',
          content: '退出登录成功',
          duration: 1000,
        })
        authStore.clearUserInfo()
        menuStore.resetRouter()
        router.push({
          name: 'login',
          query: { redirect: route.fullPath },
        })
      },
    })
  }
}

const options: DropdownOption[] = [
  {
    label: '用户资料',
    key: 'profile',
    icon: () => h('div', { class: 'i-icon-park-outline-user' }),
  },
  {
    type: 'divider',
    key: 'd1',
  },
  {
    label: '编辑用户资料',
    key: 'editProfile',
    icon: () => h('div', { class: 'i-icon-park-outline-edit' }),
  },
  {
    type: 'divider',
    key: 'd1',
  },
  {
    label: '退出登录',
    key: 'logout',
    icon: () => h('div', { class: 'i-icon-park-outline-logout' }),
  },
]
</script>

<template>
  <n-dropdown :options="options" trigger="click" @select="handleSelect">
    <n-avatar lazy round class="cursor-pointer" :src="authStore.userInfo?.avatar">
      <template #fallback>
        <div class="wh-full flex-center">
          <i-icon-park-outline-user />
        </div>
      </template>
    </n-avatar>
  </n-dropdown>
</template>
