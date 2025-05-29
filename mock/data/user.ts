import { genRandomToken } from '../utils'

export const userList: IUser[] = [
    {
        id: 1,
        email: '2180733045@qq.com',
        password: 'test001',
        nickname: 'H',
        token: genRandomToken(),
    },
]

export interface IUser {
    id: number
    email: string
    password: string
    nickname: string
    token: string
}
