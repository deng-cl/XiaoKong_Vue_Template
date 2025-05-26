import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore(
    'App',
    () => {
        const sv = ref('1.0.0.0')
        const testName = ref('Test Pinia Persis')

        const upSv = (nsv) => (sv.value = nsv)

        return { sv, testName, upSv }
    },
    {
        // -- 持久化配置: https://prazdevs.github.io/pinia-plugin-persistedstate/zh/
        persist: {
            pick: ['sv'],
        },
    },
)
