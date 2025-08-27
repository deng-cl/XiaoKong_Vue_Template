import { fetchFunctionBatchGenerator, http } from '@/utils/http'

// -- 配置写法
export const { queryUserList } = fetchFunctionBatchGenerator<{
    queryUserList: string
}>([
    {
        key: 'queryUserList',
        method: 'GET',
        url: '/user/get',
    },
])



// -- 普通写法
export const queryUserList2 = () => {
    return http.get('/user/get')
}
