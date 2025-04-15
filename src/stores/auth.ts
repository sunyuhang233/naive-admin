export const useAuthStore = defineStore('auth', () => {
  const accessToken = ref<string | null>(null)
  const userInfo = ref<UserInfo | null>(null)

  const setToken = (token: string) => {
    accessToken.value = token
  }


  const setUserInfo = (user: UserInfo) => {
    userInfo.value = user
  }

  const clearUserInfo = () => {
    userInfo.value = null
    accessToken.value = null
  }

  return {
    accessToken,
    setToken,
    userInfo,
    setUserInfo,
    clearUserInfo,
  }
}, {
  persist: true,
})
