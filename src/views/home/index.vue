<script setup lang="ts">
import TestTsxComponent from '@/components/global/TestTsxComponent';
import { useAppStore } from '@/stores';
import { ref } from 'vue';

const appStore = useAppStore()

console.log(__APP_INFO__);

// setTimeout(() => appStore.upSv('1.0.0.1'), 1000)
</script>

<template>
    <main>
        <h1 v-alert="'Test v-alert custom directive'" class="text-red font-sans m-2 flex-c" text="blue">Home</h1>
        <hr>
        <TestGlobalComponent />
        <p>sv: {{ appStore.sv }}</p>
        <p>testName: {{ appStore.testName }}</p>
        <TestTsxComponent name="H" age="18" @TestEmit="() => { console.log('TestEmit') }" />
        <hr>
        <!-- Element Plus -->
        <div class="mt-4">
            <el-button>Default</el-button>
            <el-button type="primary">Primary</el-button>
            <el-button type="success">Success</el-button>
            <el-button type="info">Info</el-button>
            <el-button type="warning">Warning</el-button>
            <el-button type="danger">Danger</el-button>
        </div>

    </main>
</template>

<style lang="scss"></style>
