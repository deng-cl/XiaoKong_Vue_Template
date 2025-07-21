import http from '@/utils/http'
import { fetchFunctionBatchGenerator } from '@/utils/http/baseImple'

export const { queryUserList } = fetchFunctionBatchGenerator<{
    queryUserList: string
}>(http,[
    {
        key: 'queryUserList',
        method: 'GET',
        url: '/user/get',
    },
])
