import type { App, Directive, DirectiveBinding } from 'vue'

/** 指令列表（可以将指令实现相关的，单独抽取到一个新目录中进行管理，这里只做一个示例）
 * 🔺为了在使用自定义指令可以有更好的提示，如果添加了新的自定义指令，请前往 types/custom-directives.d.ts 文件中声明自定义指令（可以有更好的代码提示） → Tip:移除自定义指令时，最好也将 types/custom-directives.d.ts 中的声明进行移除，避免代码混淆
 *      - 后续在考虑要不要写一个自动添加或移除自定义指令的声明工具（待定）
 */
const directives: [key: string, Directive][] = [
    [
        'alert',
        {
            // -- 双击 alert 弹窗展示 value 值指令（只做示例使用）
            mounted(el: HTMLElement, binding: DirectiveBinding<string | Array<string>>) {
                const { value } = binding
                if (value) {
                    const arg = binding.arg ?? 'dblclick'
                    el.addEventListener(arg, () => {
                        alert(value)
                    })
                } else {
                    throw new Error('[Directive: alert]: need value! Like v-alert="modelValue"')
                }
            },
        } as Directive,
    ],
]

// -- 注册所有指令插件
export const registerDirectives = (app: App) => {
    directives.forEach(([key, directive]) => {
        app.directive(key, directive)
    })
}
