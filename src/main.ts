import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import { registerDirectives, registerGlobalComponents } from './plugins'
import 'virtual:uno.css'

const app = createApp(App)

// -- 插件配置列表 → 注册插件列表中的所有插件
const plugins = [createPinia(), router, registerGlobalComponents, registerDirectives]
plugins.forEach((plugin) => /* 插件注册前处理... */ app.use(plugin))

app.mount('#app')
