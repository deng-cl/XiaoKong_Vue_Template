/// <reference types="vite/client" />

/** 声明 .md 文件，避免类型声明报错 */
declare module '*.md' {
    const content: any
    export default content
}
