<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

/** Element 全局配置 */
const ElementFormDefaultSize: 'large' | 'default' | 'small' = 'default'
const ElementDialogZIndex = 2000
</script>

<template>
    <el-config-provider :size="ElementFormDefaultSize" :z-index="ElementDialogZIndex">
        <RouterView />
    </el-config-provider>
</template>

<style scoped></style>
