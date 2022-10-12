import { Cart } from './pages/cart.jsx'
import { Home } from './pages/home.jsx'

const routes = [
    {
        path: '/',
        component: <Home />,
        label: 'Home',
    },
    {
        path: '/cart',
        component: <Cart/>,
    }
]

export default routes