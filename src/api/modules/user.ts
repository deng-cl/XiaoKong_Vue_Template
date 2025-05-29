import http, { fetchFunctionBatchGeneratorCurry } from '@/utils/http'

export const { queryUserList } = fetchFunctionBatchGeneratorCurry([
    {
        key: 'queryUserList',
        method: 'GET',
        url: '/user/get',
    },
])
