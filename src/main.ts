import { createApp } from 'vue'
import App from './App.vue'
import { setupI18n } from './modules/i18n'
import { installRouter } from './router'
import { installPinia } from './stores'
import './styles/main.css'
import 'uno.css'

async function setupApp() {
  const app = createApp(App)
  await installPinia(app)
  await installRouter(app)
  setupI18n(app)
  app.mount('#app')
}

setupApp()
