import { Home } from './pages/home.jsx'

// Routes accesible from the main navigation (in AppHeader)
const routes = [
    {
        path: '/',
        component: <Home />,
        label: 'Home',
    },
]

export default routes