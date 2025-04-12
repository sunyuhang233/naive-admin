<script setup lang="ts">
function messageText(code: string | number): string {
  let msg: string
  switch (+code) {
    case 401:
      msg = '您没有权限访问此页面! ❌'
      break
    default:
      msg = '页面没有找到! ❌'
      break
  }
  return msg
}

const router = useRouter()
const route = useRoute()

const goBack = () => {
  route.redirectedFrom?.path ? router.back() : router.replace('/')
}
</script>


<template>
  <div class="flex flex-col h-100dvh w-full items-center justify-center">
    <h3>{{ messageText(String($route.params?.code) || '404') }}</h3>
    <div class="mt-8 flex gap-4">
      <n-button type="primary" @click="goBack">
        返回
      </n-button>
      <n-button type="tertiary" border-1px border-gray-200 rounded-4px border-solid dark:border-dark-300>
        <RouterLink to="/">
          返回首页
        </RouterLink>
      </n-button>
    </div>
  </div>
</template>
