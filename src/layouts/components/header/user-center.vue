<script lang="ts" setup>
import { useDialog, useNotification } from 'naive-ui'

const authStore = useAuthStore()
const router = useRouter()
const route = useRoute()
const menuStore = useMenuStore()
const notification = useNotification()
const dialog = useDialog()

const { t } = useI18n()
const handleSelect = (key: string) => {
  if (key === 'logout') {
    dialog.info({
      title: t('common.tips'),
      content: t('form.confirmLogout'),
      positiveText: t('common.confirm'),
      negativeText: t('common.cancel'),
      maskClosable: false,
      onPositiveClick: () => {
        notification.success({
          title: t('common.logout'),
          content: t('common.logoutSuccess'),
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

const options = computed(() => [
  {
    label: t('common.profile'),
    key: 'profile',
    icon: () => h('div', { class: 'i-carbon-user' }),
  },
  {
    type: 'divider',
    key: 'd1',
  },
  {
    label: t('common.editProfile'),
    key: 'editProfile',
    icon: () => h('div', { class: 'i-icon-park-outline-edit' }),
  },
  {
    type: 'divider',
    key: 'd1',
  },
  {
    label: t('common.logout'),
    key: 'logout',
    icon: () => h('div', { class: 'i-icon-park-outline-logout' }),
  },
])
</script>

<template>
  <n-dropdown :options="options" trigger="click" @select="handleSelect">
    <n-avatar lazy round class="cursor-pointer" :src="authStore.userInfo?.avatar">
      <template #fallback>
        <div class="wh-full flex-center">
          <div class="i-carbon-user" />
        </div>
      </template>
    </n-avatar>
  </n-dropdown>
</template>
