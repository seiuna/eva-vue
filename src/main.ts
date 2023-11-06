import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementUi from "element-plus"
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(ElementUi)
app.use(router)

app.mount('#app')
