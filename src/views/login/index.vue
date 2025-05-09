<script setup lang="ts">
import type { FormInst } from 'naive-ui'
import { Locked, User } from '@vicons/carbon'
import { useDateFormat } from '@vueuse/core'
import { useNotification } from 'naive-ui'
import { HOME_PATH } from '~/config'
import { initDynamicRouter } from '~/router/dynamicRoutes'
import { local } from '~/utils/cache'

const { t } = useI18n()
const loading = ref(false)
const formRef = ref<FormInst | null>(null)
const notification = useNotification()
const model = ref<LoginModel>({
  username: 'admin',
  password: '123456',
  isRemember: false,
})
const rules = computed(() => ({
  username: [
    {
      required: true,
      message: t('form.username'),
    },
  ],
  password: [
    {
      required: true,
      message: t('form.password'),
    },
  ],
}))

const router = useRouter()
const route = useRoute()
const authStore = useAuthStore()

/**
 * 登录
 */
const handleLogin = () => {
  formRef.value?.validate(async (errors) => {
    if (!errors) {
      loading.value = true
      authStore.setToken('token')
      authStore.setUserInfo({
        id: 1,
        username: 'admin',
        name: 'admin',
        avatar: '',
        roles: ['admin'],
        permissions: ['admin'],
      })
      await initDynamicRouter()
      notification.success({
        title: '登录成功!',
        content: useDateFormat(new Date(), 'YYYY-MM-DD HH:mm:ss').value,
        duration: 1000,
        onClose: () => {
          loading.value = false
        },
      })
      if (model.value.isRemember) {
        local.setItem('loginAccount', model.value)
      }
      router.push(route.query?.redirect?.toString() || HOME_PATH)
      loading.value = false
    }
  })
}

/**
 * 获取记住我 - 信息
 */
const getRemember = () => {
  const remember = local.getItem('loginAccount') as LoginModel
  if (remember && typeof remember === 'object') {
    model.value = {
      username: remember.username,
      password: remember.password,
      isRemember: true,
    }
  }
}

onMounted(() => {
  getRemember()
})
</script>

<template>
  <div class="flex h-100dvh h-full items-center justify-center relative overflow-hidden">
    <div class="bg h-120vw w-120vw md:h-50vw md:w-50vw" />
    <section class="dark:bg-dark-5 px-4 py-6 rounded-1.5 bg-[#ffffff93] bg-white w-9/10 backdrop-blur-12px backdrop-saturate-180 md:px-8 md:py-6 dark:bg-dark-500 md:w-800px">
      <header class="tracking-0.2em flex min-h-3em items-center justify-between">
        <small>{{ $t('common.loginTitle') }}</small>
        <small class="">{{ $t('common.loginSubtitle') }}</small>
      </header>
      <section class="pb-10 flex flex-wrap items-center justify-between">
        <div class="flex-1">
          <img class="mx-a my-6 w-1/2 object-cover md:w-16rem" src="https://bpic.588ku.com/back_pic/05/95/03/375d441b0a9f6ff.jpg" alt="">
        </div>

        <n-form ref="formRef" :loading="loading" size="large" :show-label="false" class="form mx-a px-6 w-94vw md:mx-0 sm:w-400px" :model="model" :rules="rules">
          <h2
            tracking-0.2em mb-5 text-center
          >
            {{ $t('common.loginTitle') }}
          </h2>
          <n-form-item path="username">
            <n-input
              v-model:value="model.username"
              clearable
              size="large"
              :placeholder="$t('form.username')"
              @keydown.enter.prevent="handleLogin"
            >
              <template #prefix>
                <n-icon :component="User" />
              </template>
            </n-input>
          </n-form-item>
          <n-form-item path="password">
            <n-input
              v-model:value="model.password"
              clearable
              size="large"
              show-password-on="mousedown"
              type="password"
              :placeholder="$t('form.password')"
              @keydown.enter.prevent="handleLogin"
            >
              <template #prefix>
                <n-icon :component="Locked" />
              </template>
            </n-input>
          </n-form-item>
          <n-form-item path="isRemember">
            <n-checkbox v-model:checked="model.isRemember" size="large">
              {{ $t('form.isRemember') }}
            </n-checkbox>
          </n-form-item>
          <n-form-item>
            <n-button :loading="loading" circle type="primary" block size="large" @click="handleLogin">
              {{ $t('form.login') }}
            </n-button>
          </n-form-item>
        </n-form>
      </section>
    </section>
  </div>
</template>

<style scoped lang="scss">
.bg {
  position: absolute;
  background: radial-gradient(circle at top, #8fe9e1, #bcf6d1ad);
  z-index: -1;
  border-radius: 67% 33% 70% 30% / 30% 54% 46% 70%;
  animation: border-anima 20s ease-out infinite;
}

@keyframes border-anima {
  0% {
    transform: scale(1);
    border-radius: 67% 33% 70% 30% / 30% 54% 46% 70%;
  }
  25% {
    transform: scale(1.02);
    border-radius: 55% 45% 54% 46% / 42% 61% 39% 58%;
  }
  50% {
    transform: scale(0.98);
    border-radius: 70% 30% 71% 29% / 53% 70% 30% 47%;
  }
  75% {
    transform: scale(1.02);
    border-radius: 67% 33% 70% 30% / 30% 54% 46% 70%;
  }
  100% {
    transform: scale(1);
    border-radius: 67% 33% 70% 30% / 30% 54% 46% 70%;
  }
}

.form {
  display: block;
  padding: 2.5em 3em 2em 3em;
  backdrop-filter: blur(5px);
  overflow: hidden;
  animation-delay: 0.1s;
  border-radius: 12px;
}
</style>
