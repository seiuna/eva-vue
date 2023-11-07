import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import ElementUi from "element-plus"
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
app.use(ElementUi)
app.use(router)
import {ElCollapseTransition} from 'element-plus'


app.component(ElCollapseTransition.name, ElCollapseTransition)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.mount('#app')
