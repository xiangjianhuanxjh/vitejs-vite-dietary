import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'

const app = create(App)

app.use(router)
app.use(ElementPlus).mount('#app')