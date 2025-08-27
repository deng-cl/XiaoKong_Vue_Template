import { storage } from '@/utils/storager'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

export const registerPinia = () => {
    return createPinia().use(
        createPersistedState({
            // key: (id) => `__Hpbs-${id}__`, // -- 配置全局持久化缓存 key

            /* 使用自定义 storage 存储器 */
            storage: {
                getItem: storage.get.bind(storage),
                setItem: storage.set.bind(storage),
            },
            /* 自定义持久化插件序列化操作（取消该插件的自动序列化）→ 因为与所封装的 HStorage 工具的序列化有冲突，所以禁用该默认的序列化功能 */
            serializer: {
                serialize: (value) => value as any,
                deserialize: (value) => value as any,
            },
        }),
    )
}

export * from './modules/app'
