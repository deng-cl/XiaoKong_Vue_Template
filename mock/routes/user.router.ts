import type { IUser } from '../data/user'
import { responseWrapperSuccess } from '../response'
import { type FakeRouteConfig } from 'vite-plugin-fake-server/client'

export default (userList: IUser[]) => {
    const routes: FakeRouteConfig = [
        {
            url: '/user/get',
            method: 'get',
            response: () => {
                return responseWrapperSuccess(userList)
            },
        },
    ]

    return routes
}
