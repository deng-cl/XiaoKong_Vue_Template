<script setup lang="ts">
import { useAppStore } from '@/stores';

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
    </main>
</template>

<style lang="scss"></style>
