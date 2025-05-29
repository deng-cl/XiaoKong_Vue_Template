<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { RouterLink, RouterView } from 'vue-router'
import { langsConfig } from './plugins'

const { locale } = useI18n()


/** Element 全局配置 */
const ElementFormDefaultSize: 'large' | 'default' | 'small' = 'default'
const ElementDialogZIndex = 2000
const localeMessage = computed(() => locale.value === 'en' ? langsConfig.en : langsConfig.zh)

</script>

<template>
    <el-config-provider :size="ElementFormDefaultSize" :z-index="ElementDialogZIndex" :locale="localeMessage">
        <RouterView />
    </el-config-provider>
</template>

<style scoped></style>
