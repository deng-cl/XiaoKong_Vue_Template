import { defineFakeRoute } from 'vite-plugin-fake-server/client'
import { getUserRoutes } from './routes'
import { userList } from './data/user'
export default defineFakeRoute([...getUserRoutes(userList)])
