import { Home } from './pages/home.jsx'
import { Test } from './pages/test.jsx'

const routes = [
    {
        path: '/',
        component: <Home />,
        label: 'Home',
    },
    {
        path: '/test',
        component: <Test />,
    },
]

export default routes