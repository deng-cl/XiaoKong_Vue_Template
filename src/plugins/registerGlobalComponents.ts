import TestGlobal from '@/components/global/TestGlobal.vue'
import type { App, Component } from 'vue'

/** 全局组件列表:
 * 🔺为了在使用全局组件可以有更好的提示，如果添加了新的全局组件，请前往 types/global-components.d.ts 文件中声明全局组件（可以有更好的代码提示） → Tip:移除全局组件时，最好也将 types/global-components.d.ts 中的声明进行移除，避免代码混淆
 *      - 后续在考虑要不要写一个自动添加或移除全局组件的声明工具（待定）
 */
const globalComponents: [string, Component][] = [['TestGlobalComponent', TestGlobal]]

// -- 全局注册 "globalComponents" 中的所有组件插件
export const registerGlobalComponents = (app: App) => {
    globalComponents.forEach((compTuple) => {
        app.component(compTuple[0], compTuple[1])
    })
}
