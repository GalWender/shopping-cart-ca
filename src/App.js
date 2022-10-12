import React from 'react'
import { Routes, Route } from 'react-router'

import routes from './routes'
import { Home } from './pages/home'
import { AppHeader } from './cmps/app-header'
import { AppFooter } from './cmps/app-footer'

function App() {
  return (
    <div>
      <AppHeader />
      <main>
        <Routes>
          {routes.map(route => <Route key={route.path} exact={true} element={route.component} path={route.path} />)}
        </Routes>
      </main>
      <AppFooter />
    </div>
  )
}

export default App;