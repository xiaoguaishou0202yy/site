import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
//./同级   ../上一级   @/根目录下

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
