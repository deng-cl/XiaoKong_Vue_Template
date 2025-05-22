import type { Directive } from 'vue'

declare module 'vue' {
    export interface ComponentCustomProperties {
        // -- alert 弹窗指令（默认双击弹出对应内容的 alert 弹窗）→ Tip: 该指令仅为一个示例指令
        vAlert: Directive<HTMLElement, string>
    }
}

export {}
