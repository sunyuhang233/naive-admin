import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { installPinia } from './stores'
import './styles/main.css'
import 'uno.css'

async function setupApp() {
  const app = createApp(App)
  installPinia(app)
  app.use(router)
  app.mount('#app')
}

setupApp()
