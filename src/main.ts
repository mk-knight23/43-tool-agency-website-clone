import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { setupErrorHandler } from './utils/error-handler'

const app = createApp(App)

// Setup global error handling
setupErrorHandler(app)

app.mount('#app')
