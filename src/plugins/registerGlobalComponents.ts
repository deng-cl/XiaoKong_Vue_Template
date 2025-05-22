import TestGlobal from '@/components/global/TestGlobal.vue'
import type { App, Component } from 'vue'

// -- 全局组件列表
const globalComponents: [string, Component][] = [['TestGlobalComponent', TestGlobal]] as const

// -- 全局注册 "globalComponents" 中的所有组件插件
export const registerGlobalComponents = (app: App) => {
    globalComponents.forEach((compTuple) => {
        app.component(compTuple[0], compTuple[1])
    })
}

// -- 🔺Tip:为了在使用全局组件可以有更好的提示，添加了新的全局组件，请在此添加对应的类型声明，移除为避免混淆也需要在此移除掉类型声明（该 IGlobalComponents 类型声明，将会在 types/shims-vue.d.ts 中引入并声明为 Vue 全局指令）
export interface IGlobalComponents {
    TestGlobalComponent: typeof TestGlobal
}
