<script setup lang="ts">
import TestTsxComponent from '@/components/global/TestTsxComponent';
import { useAppStore } from '@/stores';
import { useI18n } from 'vue-i18n';
import { storage } from '@/utils/storager';
import http from '@/utils/http';
import { queryUserList } from '@/api/modules/user';
import NProgress from '@/utils/nprogress';

const appStore = useAppStore()

console.log(__APP_INFO__);

const { t } = useI18n()

onMounted(() => {
    queryUserList({ name: 'H' }, {
        headers: {
            "token": 'token'
        }
    }).then(res => {
        console.log('QueryUserList Mock:', res);
    })

    NProgress.start()

    setTimeout(() => {
        NProgress.done()
    }, 2000)
})
// setTimeout(() => appStore.upSv('1.0.0.1'), 1000)
</script>

<template>
    <main>
        <h1 v-alert="'Test v-alert custom directive'" class="text-red font-sans m-2 flex-c text-primary" text="blue">
            Home - {{ t('home.welcome') }} {{ t('name') }}
        </h1>
        <hr>
        <TestGlobalComponent />
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

        <!--  -->
        <hr>
        <h1>Test Storage</h1>
        <div class="mt-4">
            <el-button type="primary" @click="
                () => {
                    storage.set('name', 'xiaokong')
                    storage.set('userInfo', { nickname: 'H', age: 18 })
                }
            ">Set</el-button>

            <el-button type="primary" @click="
                () => {
                    console.log('GET:', storage.get('name'), storage.get('userInfo'));
                }
            ">Get</el-button>

            <el-button type="primary" @click="
                () => {
                    storage.remove('name')
                }
            ">Remove</el-button>

            <el-button type="primary" @click="
                () => {
                    storage.clear()
                }
            ">Clear</el-button>

            <el-button type="primary" @click="
                () => {
                    storage.clearNamespace()
                }
            ">ClearNamespace</el-button>
        </div>
    </main>
</template>

<style lang="scss"></style>
