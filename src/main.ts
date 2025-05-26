import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate, { createPersistedState } from 'pinia-plugin-persistedstate'
import router from './router'
import { registerDirectives, registerGlobalComponents } from './plugins'
import 'virtual:uno.css'
import '@/styles/index.css'
import { registerPinia } from './stores'

const app = createApp(App)

// -- 插件配置列表 → 注册插件列表中的所有插件
const plugins = [registerPinia(), router, registerGlobalComponents, registerDirectives]
plugins.forEach((plugin) => /* 插件注册前处理... */ app.use(plugin))

app.mount('#app')
