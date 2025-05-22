declare module 'vue' {
    /**
     * 自定义全局组件获得 Volar 提示（自定义的全局组件需要在这里声明下才能获得 Volar 类型提示哦）- 全局组件类型声明
     */
    export interface GlobalComponents {
        TestGlobalComponent: typeof import('@/components/global/TestGlobal.vue')
    }
}

export {}
