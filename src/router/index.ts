import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { staticRoutes } from './staticRoutes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: staticRoutes,
})

export async function installRouter(app: App) {
  app.use(router)
  await router.isReady()
}

export default router
