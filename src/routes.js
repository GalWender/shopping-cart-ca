import { Cart } from './pages/cart.jsx'
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
    {
        path: '/cart',
        component: <Cart/>,
    }
]

export default routes